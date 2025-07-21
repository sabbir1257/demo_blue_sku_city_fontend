import path from 'path';

export type TNavLinks = {
  name: string;
  path: string;
  children?: any;
};
export const navLinks: TNavLinks[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About us',
    path: '',
    children: [
      {
        name: 'About Us',
        path: '/about',
      },
      {
        name: 'Chairman Message',
        path: '/chairmanMessage',
      },
      {
        name: 'Managing directing message',
        path: '/chairmanMessage#managingDirector',
      },
      {
        name: 'Board Of director',
        path: '/boardOfDirector',
      },
      {
        name: 'Executive team',
        path: '/boardOfDirector#executiveTeam',
      },
      {
        name: 'Share holders',
        path: '/boardOfDirector#shareHolders',
      },
      {
        name: 'Membership and certificate',
        path: '/certificate',
      },
    ],
  },
  // {
  //   name: "Our Team",
  //   path: "/teams",
  // },
  {
    name: 'Project',
    path: '',
    children: [
      {
        name: 'Blue Sly City',
        path: '/project',
      },
      {
        name: 'Blue Sky Flat Project',
        path: '/flatProject',
      },
      {
        name: 'Blue Sky Condominium',
        path: 'project/blueSkyCondominium',
      },
    ],
  },
  {
    name: 'Business',
    path: '',
    children: [
      {
        name: 'Blue Sky Dream Hotel and Resorts',
        path: '/blyeSkyDreamHotelAndResorts',
      },
      {
        name: 'Blue Sky Dream Society',
        path: '/blyeSkyDreamSociety',
      },
      {
        name: "Blue Sky Dream Agro",
        path: 'blueSkyDreamAgro',
      },
      {
        name: "Blue Sky Dream Tours & Travels",
        path: 'blueSkyDreamToursTravels',
      },
      {
        name: "Blue Sky Dream Hajj & Umrah",
        path: 'blueSkyDreamHajjUmrah',
      },
    ],
  },
  {
    name: 'News & Events',
    path: '/newsEvents',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];
