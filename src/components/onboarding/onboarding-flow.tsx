"use client";

import { useState } from "react";
import type { KeyboardEvent, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileSearch,
  LockKeyhole,
  Map,
  Plus,
  ShieldCheck,
  Upload,
  UsersRound,
  X,
} from "lucide-react";
import { Controller, useForm, useFormState } from "react-hook-form";
import { saveOnboardingProfile } from "@/app/onboarding/actions";
import {
  onboardingDataSchema,
  onboardingDefaultValues,
  primaryGoals,
  studyApproaches,
  studyStages,
} from "@/lib/onboarding";
import type { OnboardingData } from "@/lib/onboarding";

const steps = [
  {
    title: "About you",
    shortTitle: "You",
    description: "A name and study stage for your workspace.",
    fields: ["displayName", "studyStage"] as const,
  },
  {
    title: "Your university",
    shortTitle: "University",
    description: "Put trusted campus material within reach.",
    fields: ["universityName", "collegeEmail"] as const,
  },
  {
    title: "Study focus",
    shortTitle: "Focus",
    description: "Shape the notes and roadmaps you see first.",
    fields: ["subjects", "primaryGoal", "studyApproach"] as const,
  },
] as const;

const goalIcons = {
  "find-notes": FileSearch,
  "build-roadmap": Map,
  "study-together": UsersRound,
  "share-notes": Upload,
} as const;

const inputClassName =
  "focus-ring focus-dark mt-2 h-12 w-full rounded-[10px] border border-[var(--border-strong)] bg-[var(--off-white)] px-4 text-[15px] text-[var(--ink)] outline-none transition-colors placeholder:text-[#6b5f62] hover:border-[var(--green-ledger)] focus:border-[var(--green-deep)]";

type OnboardingStep = 0 | 1 | 2;

function scrollToPageTop(): void {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

function BrandMark(): ReactElement {
  return (
    <Link
      href="/"
      className="focus-ring pressable inline-flex items-center gap-3 rounded-[8px]"
      aria-label="ClassVault home"
    >
      <span className="relative size-9 overflow-hidden rounded-[8px] bg-white">
        <Image
          src="/icon.svg"
          alt=""
          fill
          priority
          sizes="36px"
          className="object-contain p-1"
        />
      </span>
      <span className="font-display text-[21px] leading-none text-[var(--ivory)]">
        ClassVault
      </span>
    </Link>
  );
}

function ProgressList({ currentStep }: { currentStep: OnboardingStep }): ReactElement {
  return (
    <ol className="mt-14 space-y-1" aria-label="Setup progress">
      {steps.map((step, index) => {
        const isCurrent = index === currentStep;
        const isComplete = index < currentStep;

        return (
          <li
            key={step.title}
            aria-current={isCurrent ? "step" : undefined}
            className={`flex gap-4 rounded-[10px] px-3 py-4 transition-colors duration-200 ${
              isCurrent ? "bg-[var(--green)]" : ""
            }`}
          >
            <span
              className={`grid size-7 shrink-0 place-items-center rounded-full border text-xs font-bold ${
                isComplete
                  ? "border-[var(--marigold)] bg-[var(--marigold)] text-[var(--ink)]"
                  : isCurrent
                    ? "border-[var(--ivory)] text-[var(--ivory)]"
                    : "border-[var(--green-soft)] text-[var(--ivory-faint)]"
              }`}
            >
              {isComplete ? (
                <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />
              ) : (
                index + 1
              )}
            </span>
            <span>
              <span
                className={`block text-sm font-semibold ${
                  isCurrent || isComplete
                    ? "text-[var(--ivory)]"
                    : "text-[var(--ivory-muted)]"
                }`}
              >
                {step.title}
              </span>
              <span className="mt-1 block text-[12.5px] leading-5 text-[var(--ivory-faint)]">
                {step.description}
              </span>
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function MobileProgress({ currentStep }: { currentStep: OnboardingStep }): ReactElement {
  return (
    <div className="border-b border-[var(--green-soft)] px-5 py-4 lg:hidden">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold">
        <span className="text-[var(--ivory)]">
          {steps[currentStep].shortTitle}
        </span>
        <span className="text-[var(--ivory-muted)]">
          {currentStep + 1} of {steps.length}
        </span>
      </div>
      <div
        className="grid grid-cols-3 gap-2"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={steps.length}
        aria-valuenow={currentStep + 1}
        aria-label={`Step ${currentStep + 1} of ${steps.length}`}
      >
        {steps.map((step, index) => (
          <span
            key={step.title}
            className={`h-1 rounded-full ${
              index <= currentStep
                ? "bg-[var(--marigold)]"
                : "bg-[var(--green-soft)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }): ReactElement | null {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-2 text-sm font-medium text-[#9b2c22]">
      {message}
    </p>
  );
}

function ProfileStep({
  control,
  register,
}: {
  control: ReturnType<typeof useForm<OnboardingData>>["control"];
  register: ReturnType<typeof useForm<OnboardingData>>["register"];
}): ReactElement {
  const { errors } = useFormState({ control });

  return (
    <div className="space-y-7">
      <div>
        <label htmlFor="displayName" className="text-sm font-semibold text-[var(--ink)]">
          What should classmates call you?
        </label>
        <input
          id="displayName"
          type="text"
          autoComplete="nickname"
          maxLength={40}
          placeholder="Your display name"
          aria-invalid={Boolean(errors.displayName)}
          aria-describedby={errors.displayName ? "displayName-error" : "displayName-help"}
          className={inputClassName}
          {...register("displayName")}
        />
        <p id="displayName-help" className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
          This can be a pseudonym. Your account identity stays private.
        </p>
        <FieldError id="displayName-error" message={errors.displayName?.message} />
      </div>

      <div>
        <label htmlFor="studyStage" className="text-sm font-semibold text-[var(--ink)]">
          Where are you in your studies?
        </label>
        <select
          id="studyStage"
          aria-invalid={Boolean(errors.studyStage)}
          aria-describedby={errors.studyStage ? "studyStage-error" : undefined}
          className={`${inputClassName} appearance-none bg-[linear-gradient(45deg,transparent_50%,var(--ink-muted)_50%),linear-gradient(135deg,var(--ink-muted)_50%,transparent_50%)] bg-[position:calc(100%-19px)_21px,calc(100%-14px)_21px] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-12`}
          {...register("studyStage")}
        >
          {studyStages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
        <FieldError id="studyStage-error" message={errors.studyStage?.message} />
      </div>

      <div className="flex gap-3 rounded-[10px] bg-[var(--off-white)] p-4 text-sm leading-6 text-[var(--ink-muted)]">
        <LockKeyhole aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-[var(--green-ledger)]" />
        <p>
          ClassVault has no follower counts or profile discovery. This name only
          gives your contributions a useful identity.
        </p>
      </div>
    </div>
  );
}

function UniversityStep({
  control,
  register,
}: {
  control: ReturnType<typeof useForm<OnboardingData>>["control"];
  register: ReturnType<typeof useForm<OnboardingData>>["register"];
}): ReactElement {
  const { errors } = useFormState({ control });

  return (
    <div className="space-y-7">
      <div>
        <label htmlFor="universityName" className="text-sm font-semibold text-[var(--ink)]">
          University name
        </label>
        <input
          id="universityName"
          type="text"
          autoComplete="organization"
          maxLength={120}
          placeholder="e.g. University of Delhi"
          aria-invalid={Boolean(errors.universityName)}
          aria-describedby={errors.universityName ? "universityName-error" : "universityName-help"}
          className={inputClassName}
          {...register("universityName")}
        />
        <p id="universityName-help" className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
          We use the full institution—not a department or campus—to find your community.
        </p>
        <FieldError id="universityName-error" message={errors.universityName?.message} />
      </div>

      <div>
        <div className="flex items-baseline justify-between gap-4">
          <label htmlFor="collegeEmail" className="text-sm font-semibold text-[var(--ink)]">
            College email
          </label>
          <span className="text-xs font-medium text-[var(--ink-muted)]">Optional for now</span>
        </div>
        <input
          id="collegeEmail"
          type="email"
          inputMode="email"
          autoComplete="email"
          maxLength={254}
          placeholder="you@college.edu"
          aria-invalid={Boolean(errors.collegeEmail)}
          aria-describedby={errors.collegeEmail ? "collegeEmail-error" : "collegeEmail-help"}
          className={inputClassName}
          {...register("collegeEmail")}
        />
        <p id="collegeEmail-help" className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
          Verification later unlocks university-only notes, conversations, and rooms.
        </p>
        <FieldError id="collegeEmail-error" message={errors.collegeEmail?.message} />
      </div>

      <div className="flex gap-3 rounded-[10px] border border-[var(--field-line)] p-4 text-sm leading-6 text-[var(--ink-muted)]">
        <ShieldCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-[var(--green-ledger)]" />
        <p>
          Verification proves control of an allowlisted college email. We never
          ask for an ID card or use it as your sign-in identity.
        </p>
      </div>
    </div>
  );
}

function SubjectPicker({
  value,
  onChange,
  error,
}: {
  value: string[];
  onChange: (subjects: string[]) => void;
  error?: string;
}): ReactElement {
  const [draft, setDraft] = useState("");

  const addSubject = (): void => {
    const nextSubject = draft.trim().replace(/\s+/g, " ");
    if (nextSubject.length < 2 || value.length >= 6) return;

    const alreadyAdded = value.some(
      (subject) => subject.toLocaleLowerCase() === nextSubject.toLocaleLowerCase(),
    );
    if (alreadyAdded) {
      setDraft("");
      return;
    }

    onChange([...value, nextSubject]);
    setDraft("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== "Enter" && event.key !== ",") return;
    event.preventDefault();
    addSubject();
  };

  return (
    <div>
      <label htmlFor="subjectInput" className="text-sm font-semibold text-[var(--ink)]">
        What are you studying right now?
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="subjectInput"
          type="text"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={handleKeyDown}
          maxLength={40}
          disabled={value.length >= 6}
          placeholder={value.length >= 6 ? "Maximum reached" : "Add a subject"}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "subjects-error" : "subjects-help"}
          className={`${inputClassName} mt-0 disabled:cursor-not-allowed disabled:opacity-60`}
        />
        <button
          type="button"
          onClick={addSubject}
          disabled={draft.trim().length < 2 || value.length >= 6}
          className="focus-ring focus-dark pressable grid size-12 shrink-0 place-items-center rounded-[10px] border border-[var(--green-deep)] bg-[var(--green-deep)] text-[var(--ivory)] disabled:cursor-not-allowed disabled:border-[var(--field-line)] disabled:bg-[var(--field-line)] disabled:text-[var(--ink-muted)]"
          aria-label="Add subject"
        >
          <Plus aria-hidden="true" className="size-5" />
        </button>
      </div>
      <p id="subjects-help" className="mt-2 text-sm leading-6 text-[var(--ink-muted)]">
        Add up to six free-form subjects. Press Enter after each one.
      </p>
      {value.length > 0 ? (
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Selected subjects">
          {value.map((subject) => (
            <li key={subject}>
              <span className="inline-flex h-9 items-center gap-2 rounded-full bg-[var(--green-deep)] py-1 pr-2 pl-3 text-sm font-medium text-[var(--ivory)]">
                {subject}
                <button
                  type="button"
                  onClick={() => onChange(value.filter((item) => item !== subject))}
                  className="focus-ring grid size-6 place-items-center rounded-full hover:bg-[var(--green-soft)]"
                  aria-label={`Remove ${subject}`}
                >
                  <X aria-hidden="true" className="size-3.5" />
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
      <FieldError id="subjects-error" message={error} />
    </div>
  );
}

function FocusStep({
  control,
  register,
}: {
  control: ReturnType<typeof useForm<OnboardingData>>["control"];
  register: ReturnType<typeof useForm<OnboardingData>>["register"];
}): ReactElement {
  const { errors } = useFormState({ control });

  return (
    <div className="space-y-8">
      <Controller
        name="subjects"
        control={control}
        render={({ field }) => (
          <SubjectPicker
            value={field.value}
            onChange={field.onChange}
            error={errors.subjects?.message}
          />
        )}
      />

      <fieldset>
        <legend className="text-sm font-semibold text-[var(--ink)]">
          What would you like to do first?
        </legend>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {primaryGoals.map((goal) => {
            const Icon = goalIcons[goal.value];
            return (
              <label key={goal.value} className="group relative cursor-pointer">
                <input
                  type="radio"
                  value={goal.value}
                  className="peer sr-only"
                  {...register("primaryGoal")}
                />
                <span className="flex min-h-14 items-center gap-3 rounded-[10px] border border-[var(--field-line)] px-4 py-3 text-sm font-semibold text-[var(--ink-body)] transition-colors hover:border-[var(--green-ledger)] peer-checked:border-[var(--green-deep)] peer-checked:bg-[var(--green-deep)] peer-checked:text-[var(--ivory)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[var(--green-deep)]">
                  <Icon aria-hidden="true" className="size-4 shrink-0" />
                  {goal.label}
                </span>
              </label>
            );
          })}
        </div>
        <FieldError id="primaryGoal-error" message={errors.primaryGoal?.message} />
      </fieldset>

      <fieldset>
        <legend className="text-sm font-semibold text-[var(--ink)]">
          How do you prefer to study?
        </legend>
        <div className="mt-3 space-y-2">
          {studyApproaches.map((approach) => (
            <label key={approach.value} className="group relative block cursor-pointer">
              <input
                type="radio"
                value={approach.value}
                className="peer sr-only"
                {...register("studyApproach")}
              />
              <span className="flex items-start gap-3 rounded-[10px] border border-[var(--field-line)] px-4 py-3.5 transition-colors hover:border-[var(--green-ledger)] peer-checked:border-[var(--green-deep)] peer-checked:bg-[var(--crimson-wash)] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-3 peer-focus-visible:outline-[var(--green-deep)]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[var(--border-strong)] bg-white peer-checked:border-[var(--green-deep)]">
                  <span className="size-2 rounded-full bg-[var(--green-deep)] opacity-0 group-has-[:checked]:opacity-100" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[var(--ink)]">
                    {approach.label}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-5 text-[var(--ink-muted)]">
                    {approach.description}
                  </span>
                </span>
              </span>
            </label>
          ))}
        </div>
        <FieldError id="studyApproach-error" message={errors.studyApproach?.message} />
      </fieldset>
    </div>
  );
}

export function OnboardingFlow(): ReactElement {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>(0);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    register,
    trigger,
  } = useForm<OnboardingData>({
    resolver: zodResolver(onboardingDataSchema),
    defaultValues: onboardingDefaultValues,
    mode: "onBlur",
  });

  const goForward = async (): Promise<void> => {
    const stepIsValid = await trigger([...steps[currentStep].fields], {
      shouldFocus: true,
    });
    if (!stepIsValid || currentStep === 2) return;

    setCurrentStep((step) => (step + 1) as OnboardingStep);
    scrollToPageTop();
  };

  const goBack = (): void => {
    if (currentStep === 0) return;
    setCurrentStep((step) => (step - 1) as OnboardingStep);
    scrollToPageTop();
  };

  const completeSetup = async (data: OnboardingData): Promise<void> => {
    setSubmissionError(null);
    const result = await saveOnboardingProfile(data);
    if (!result.success) {
      setSubmissionError(result.message);
      scrollToPageTop();
    }
  };

  return (
    <main className="min-h-screen bg-[var(--off-white)] lg:grid lg:grid-cols-[minmax(300px,0.78fr)_minmax(560px,1.22fr)]">
      <aside className="bg-[var(--green-deep)] text-[var(--ivory)] lg:min-h-screen">
        <div className="mx-auto flex max-w-xl items-center justify-between px-5 py-5 sm:px-8 lg:min-h-screen lg:max-w-md lg:flex-col lg:items-stretch lg:justify-start lg:px-10 lg:py-10 xl:px-14">
          <BrandMark />
          <span className="text-xs font-semibold text-[var(--ivory-muted)] lg:hidden">
            Secure setup
          </span>

          <div className="mt-20 hidden lg:block">
            <p className="text-sm font-semibold text-[var(--marigold)]">About 2 minutes</p>
            <h2 className="font-display mt-4 text-[clamp(2.3rem,4vw,3.6rem)] leading-[1.05] text-[var(--ivory)]">
              Start with material that fits you.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[var(--ivory-muted)]">
              A few details help ClassVault surface the right university notes,
              study rooms, and roadmap style from day one.
            </p>
          </div>

          <div className="hidden lg:block">
            <ProgressList currentStep={currentStep} />
          </div>

          <div className="mt-auto hidden items-center justify-between border-t border-[var(--green-soft)] pt-6 lg:flex">
            <span className="text-xs text-[var(--ivory-faint)]">You can change this later.</span>
            <span className="text-xs font-semibold text-[var(--ivory-muted)]">
              Saved to your account
            </span>
          </div>
        </div>
        <MobileProgress currentStep={currentStep} />
      </aside>

      <section className="on-light flex min-h-[calc(100vh-121px)] items-start lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-[680px] px-5 py-10 sm:px-8 sm:py-14 lg:px-14 lg:py-16">
          <div key={currentStep} className="hero-rise">
            <p className="text-sm font-semibold text-[var(--green-ledger)]">
              Step {currentStep + 1} of {steps.length}
            </p>
            <h1 className="font-display mt-3 text-[clamp(2.35rem,5vw,3.45rem)] leading-[1.06] text-[var(--ink)]">
              {steps[currentStep].title}
            </h1>
            <p className="mt-4 max-w-lg text-[15.5px] leading-7 text-[var(--ink-muted)]">
              {currentStep === 0
                ? "Keep it simple. This is the identity classmates will see when you contribute."
                : currentStep === 1
                  ? "Your university determines which verified community you can join."
                  : "We’ll use this to prioritize useful material—not to build an attention feed."}
            </p>

            {submissionError ? (
              <p
                role="alert"
                className="mt-6 rounded-[10px] border border-[#9b2c22]/25 bg-[#9b2c22]/8 px-4 py-3 text-sm font-semibold text-[#9b2c22]"
              >
                {submissionError}
              </p>
            ) : null}

            <form onSubmit={handleSubmit(completeSetup)} className="mt-9" noValidate>
              {currentStep === 0 ? (
                <ProfileStep control={control} register={register} />
              ) : currentStep === 1 ? (
                <UniversityStep control={control} register={register} />
              ) : (
                <FocusStep control={control} register={register} />
              )}

              <div className="mt-10 flex items-center justify-between gap-3 border-t border-[var(--field-line)] pt-6">
                {currentStep > 0 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="btn btn-outline-ink pressable focus-ring focus-dark !px-4"
                  >
                    <ArrowLeft aria-hidden="true" className="size-4" />
                    Back
                  </button>
                ) : (
                  <span />
                )}

                {currentStep < 2 ? (
                  <button
                    type="button"
                    onClick={goForward}
                    className="btn btn-green pressable focus-ring focus-dark cta-link"
                  >
                    Continue
                    <ArrowRight aria-hidden="true" className="cta-arrow size-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-marigold pressable focus-ring focus-dark cta-link disabled:cursor-wait disabled:opacity-70"
                  >
                    Finish setup
                    <ArrowRight aria-hidden="true" className="cta-arrow size-4" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
