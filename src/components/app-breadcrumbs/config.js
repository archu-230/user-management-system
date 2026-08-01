import { HOME, USERS } from "../../constants/route";

const homeBreadcrumbs = [
  { path: HOME.ROOT, label: "Home" },
];

const dashboardBreadcrumbs = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/dashboard/settings", label: "Settings" },
];

const usersBreadcrumbs = [
  { path: USERS.ROOT, label: "Users" },
  { path: "/users/:id/edit", label: "Edit User" },
  { path:"/users/add-user", label:"Add-User" }
];

const productsBreadcrumbs = [
  { path: "/products", label: "Products" },
  { path: "/products/:productId", label: "Product Details" },
];

const profileBreadcrumbs = [
  { path: "/profile", label: "Profile" },
  { path: "/profile/edit", label: "edit" }
];

const breadcrumbs = [
  ...homeBreadcrumbs,
  ...dashboardBreadcrumbs,
  ...usersBreadcrumbs,
  ...productsBreadcrumbs,
  ...profileBreadcrumbs,
];


const config = { breadcrumbs, };

export default config;