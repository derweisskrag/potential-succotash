export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Airplane Company - Fly with Us",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Book Flight",
      href: "/book-flight",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    // I leave these links
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
