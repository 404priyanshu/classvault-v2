create table public.profiles (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 2 and 40),
  study_stage text not null check (
    study_stage in (
      'First year',
      'Second year',
      'Third year',
      'Fourth year or later',
      'Postgraduate'
    )
  ),
  university_name text not null check (
    char_length(university_name) between 2 and 120
  ),
  college_email text check (
    college_email is null or char_length(college_email) <= 254
  ),
  subjects text[] not null check (cardinality(subjects) between 1 and 6),
  primary_goal text not null check (
    primary_goal in (
      'find-notes',
      'build-roadmap',
      'study-together',
      'share-notes'
    )
  ),
  study_approach text not null check (
    study_approach in ('exam-revision', 'concept-mastery', 'balanced')
  ),
  onboarding_completed_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is
  'Private student onboarding profiles linked one-to-one with auth users.';

alter table public.profiles enable row level security;

revoke all on table public.profiles from anon, authenticated;
grant select, insert, update on table public.profiles to authenticated;

create policy "Students can read their own profile"
on public.profiles
for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "Students can create their own profile"
on public.profiles
for insert
to authenticated
with check ((select auth.uid()) = user_id);

create policy "Students can update their own profile"
on public.profiles
for update
to authenticated
using ((select auth.uid()) = user_id)
with check ((select auth.uid()) = user_id);

create function public.set_profiles_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger set_profiles_updated_at
before update on public.profiles
for each row
execute function public.set_profiles_updated_at();

revoke all on function public.set_profiles_updated_at() from public, anon, authenticated;
