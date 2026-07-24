import type { Metadata } from "next";
import type { ReactElement } from "react";
import { redirect } from "next/navigation";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { mapProfileRow, profileSelectColumns } from "@/lib/profile";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Dashboard | ClassVault",
  description: "Continue studying with your notes, rooms, and personal roadmaps.",
};

export default async function DashboardPage(): Promise<ReactElement> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?next=%2Fdashboard");

  const { data: profile, error } = await supabase
    .from("profiles")
    .select(profileSelectColumns)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) throw new Error("Unable to load your student profile.");
  if (!profile) redirect("/onboarding");

  return (
    <DashboardShell
      studentProfile={mapProfileRow(profile)}
      accountEmail={user.email ?? ""}
    />
  );
}
