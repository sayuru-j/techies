import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Categories",
      href: "/categories",
      disabled: true,
    },
  ],
};
