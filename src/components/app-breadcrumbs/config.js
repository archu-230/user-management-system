const homeBreadcrumbs = [
    { path: "/", label: "Home" },
];

const dashboardBreadcrumbs = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/settings", label: "Settings" },
];

const usersBreadcrumbs = [
    { path: "/users", label: "Users" },
    { path: "/users/:id", label: "User Details" },
    { path: "/users/:id/edit", label: "Edit User" },
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