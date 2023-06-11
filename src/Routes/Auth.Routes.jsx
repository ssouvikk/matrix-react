import ForgotPassword from "../Views/Auth/ForgotPasswordView";
import HomeView from "../Views/Auth/HomeView";
import LoginView from "../Views/Auth/LoginView";
import RegisterView from "../Views/Auth/RegisterView";
import ResetPassword from "../Views/Auth/ResetPassword";


export const routes = [
    { path: '/', exact: true, name: 'Home', component: HomeView },

    { path: '/login', exact: true, name: 'Login', component: LoginView },
    { path: '/register', exact: true, name: 'Register', component: RegisterView },

    { path: '/verify-email/:token', exact: true, name: 'Verify Email', component: HomeView },

    { path: '/forgot-password', exact: true, name: 'Forgot Password', component: ForgotPassword },
    { path: '/reset-password/:token', exact: true, name: 'Reset Password', component: ResetPassword },
];