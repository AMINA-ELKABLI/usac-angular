import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        },
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 2
            },



        ]
    },
    {
        id: 7,
        isLayout: true
    },
    {
        id: 8,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
  {
    id: 9,
    label: 'Child',
    icon: '',
    link: '/listChild',
  },
  {
    id: 9,
    label: 'Team',
    icon: '',
    link: '/listEquip',
  },
  {
    id: 9,
    label: 'Match',
    icon: '',
    link: '/listMatch',
  },
  {
    id: 9,
    label: 'Stock',
    icon: '',
    link: '/listStock',
  },



    {
        id: 21,
        label: 'MENUITEMS.HOME.TEXT',
        icon: 'bx bx-home',
        subItems: [

            {
                id: 28,
                label: 'Home',
                link: '/crypto-ico-landing',
                parentId: 21
            }
        ]
    },





];

