import DashboardView from "../Views/Dashboard/DashboardView";

export const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardView },
    // { path: '/profile', exact: false, name: 'Profile', component: MyProfile },
    // { path: '/change-password', exact: true, name: 'Change Password', component: ChangePassword },
];
