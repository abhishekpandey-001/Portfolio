const work1 = new URL('../../assets/work1.jpg', import.meta.url).href;
const work2 = new URL('../../assets/work2.jpg', import.meta.url).href;
const work3 = new URL('../../assets/work3.jpg', import.meta.url).href;
const work4 = new URL('../../assets/work4.jpg', import.meta.url).href;
const work5 = new URL('../../assets/work5.jpg', import.meta.url).href;


export const projectsData = [
    {
        id: 1,
        image: work1,
        title: 'Portfolio',
        category: 'web',
        link: 'https://weather-app-three-tau-94.vercel.app/',
    },

    {
        id: 2,
        image: work2,
        title: 'Weather App',
        category: 'app',
        link: 'https://weather-app-three-tau-94.vercel.app/'
    },

    {
        id: 3,
        image: work3,
        title: 'Brand Design',
        category: 'design',
        link: 'https://weather-app-three-tau-94.vercel.app/'
    },

    {
        id: 4,
        image: work4,
        title: 'App movi',
        category: 'app',
        link: 'https://weather-app-three-tau-94.vercel.app/'
    },

    {
        id: 5,
        image: work5,
        title: 'Web Design',
        category: 'web',
        link: 'https://weather-app-three-tau-94.vercel.app/'
    },
];


export const projectNav = [
    {
        name: 'all'
    },

    {
        name: 'web'
    },

    {
        name: 'app'
    },

    {
        name: 'design'
    },
];