# Supabase authentication setup

ClassVault supports Google and email/password authentication through Supabase. Authentication is server-first: passwords are submitted to server actions, OAuth codes are exchanged by the callback route, and protected routes validate the session with Supabase.

## Environment variables

Add these values to your local `.env.local` and to the deployment environment:

```text
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`NEXT_PUBLIC_SUPABASE_ANON_KEY` is also accepted as a temporary fallback for projects that have not moved to publishable keys. Never expose a Supabase secret key or service-role key through a `NEXT_PUBLIC_` variable.

Use the production origin for `NEXT_PUBLIC_SITE_URL` in production, without a trailing path.

## Supabase dashboard

1. Open **Authentication → URL Configuration**.
2. Set the production **Site URL**.
3. Add these redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `https://YOUR_PRODUCTION_DOMAIN/auth/callback`
4. Open **Authentication → Providers → Email** and enable email/password signups. Keep email confirmation enabled for production.
5. Open **Authentication → Providers → Google**, enable it, and enter the Google OAuth client ID and secret.
6. In Google Cloud, add Supabase’s callback URL as an authorized redirect URI:
   - `https://YOUR_PROJECT_REF.supabase.co/auth/v1/callback`

## Profile migration

The authenticated onboarding and dashboard flows require the `public.profiles` table. Apply [the profile migration](../supabase/migrations/20260724000000_create_profiles.sql) before testing them.

For a project without the Supabase CLI:

1. Open **Supabase Dashboard → SQL Editor**.
2. Create a new query.
3. Paste the complete migration file.
4. Run it once and confirm `public.profiles` appears in **Table Editor**.

If the project is linked to the Supabase CLI, run `supabase db push` instead.

The migration grants authenticated students only `select`, `insert`, and `update`. RLS policies restrict each operation to the row whose `user_id` matches `auth.uid()`; students cannot list or delete other profiles.

## Application routes

- `/signup` — Google or email/password account creation
- `/login` — Google or email/password sign-in
- `/auth/callback` — OAuth and email-confirmation code exchange
- `/onboarding` — authenticated students without a completed profile
- `/dashboard` — authenticated students with a completed profile

After email signup, students are asked to confirm their inbox. Google signup and projects with email confirmation disabled continue directly to onboarding. Returning students with completed profiles are sent to the dashboard.

## Database safety

Authentication does not automatically protect application tables. Enable Row Level Security on every student-data table and write policies using `auth.uid()`. Browser-facing code should use only the publishable key; privileged operations belong in trusted server code with explicit authorization checks.

## Manual verification

1. Create a new email/password account and follow the confirmation link.
2. Create an account with Google.
3. Sign in with both methods.
4. Visit `/dashboard` while signed out and confirm the app redirects to `/login?next=%2Fdashboard`.
5. Sign out from the dashboard account menu.
6. Confirm signed-in students visiting `/login` or `/signup` are redirected to `/dashboard`.
7. Complete onboarding, then confirm the profile appears in `public.profiles` and the dashboard shows the saved name, university, subjects, and account email.
8. Sign in from a second browser and confirm the saved profile is loaded without repeating onboarding.
