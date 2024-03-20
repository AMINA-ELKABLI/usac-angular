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
        link: '/dashboard',
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
    label: 'MENUITEMS.CALENDAR.TEXT',
    icon: 'bx-calendar',
    link: '/calendar',
  },

  {
    id: 9,
    label: 'Child',
    icon: 'bx bx-user-plus',
    link: '/listChild',
  },
  {
    id: 9,
    label: 'Team',
    icon: 'bx bxs-group',
    link: '/listEquip',
  },
  {
    id: 9,
    label: 'Match',
    icon: 'bx bx-football',
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
         link: '/home',
    },





];

