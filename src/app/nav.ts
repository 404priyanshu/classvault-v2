export type NavItem = { label: string; href: string };

// Every href points to a section id that actually exists in the page.
export const navItems: NavItem[] = [
  { label: "What is ClassVault ?", href: "#product" },
  { label: "Notes", href: "#notes" },
  { label: "Study Rooms", href: "#rooms" },
  { label: "Roadmaps", href: "#roadmaps" },
  { label: "Pricing", href: "#plans" },
  { label: "FAQ", href: "#faq" },
  { label: "Get started", href: "#final" },
];
