type NavItem = {
    id: number;
    name: string;
    link: string;
}

export const Navitems: NavItem[] = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Works',
        link: '/works'    
    },
    {
        id: 3,
        name: 'Resume',
        link: '/resume'
    },
    {
        id: 4,
        name: 'Contact',
        link: '/contact'
    }
]