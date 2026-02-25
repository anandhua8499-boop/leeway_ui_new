import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
    {
        navCap: 'Home',
    },
    {
        displayName: 'Dashboard',
        iconName: 'solar:atom-line-duotone',
        route: '/dashboard',
    },
    {
        navCap: 'Pages',
    },
    {
        displayName: 'Tests',
        iconName: 'solar:clipboard-add-broken',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Login',
                iconName: 'tabler:point',
                route: '/authentication/login',
            }
        ]
    },
    {
        displayName: 'Questions',
        iconName: 'solar:question-square-linear',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Login',
                iconName: 'tabler:point',
                route: '/authentication/login',
            }
        ]
    },
    {
        displayName: 'Students',
        iconName: 'solar:user-id-outline',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Login',
                iconName: 'tabler:point',
                route: '/authentication/login',
            }
        ]
    },
    {
        displayName: 'Results',
        iconName: 'solar:chat-square-2-outline',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Login',
                iconName: 'tabler:point',
                route: '/authentication/login',
            }
        ]
    },

    {
        navCap: 'Auth',
    },
    {
        displayName: 'Login',
        iconName: 'solar:login-2-linear',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Login',
                iconName: 'tabler:point',
                route: '/authentication/login',
            }
        ]
    },
    {
        displayName: 'Register',
        iconName: 'solar:user-plus-linear',
        route: 'authentication',
        children: [
            {
                displayName: 'Boxed Register',
                iconName: 'tabler:point',
                route: '/authentication/register',
            }
        ]
    },

];