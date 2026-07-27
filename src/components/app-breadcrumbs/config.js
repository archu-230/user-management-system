const config = {
    home: {
        config: [
            { path: "/", label: "Home" },
        ],
    },

    dashboard: {
        config: [
            { path: "/dashboard", label: "Dashboard" },
            { path: "/dashboard/settings", label: "Settings" },
        ],
    },

    users: {
        config: [
            { path: "/users", label: "Users" },
            { path: "/users/:id", label: "User Details" },
            { path: "/users/:id/edit", label: "Edit User" },
        ],
    },

    products: {
        config: [
            { path: "/products", label: "Products" },
            { path: "/products/:productId", label: "Product Details" },
        ],
    },
    profile: {
        config: [
            {
                path: "/profile", label: "profile"
            },
        ],
    },
};

export default config;