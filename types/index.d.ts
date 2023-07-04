export type MainNavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
};
