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
    icon: 'bx-calendar',
    link: '/listChild',
  },
  {
    id: 9,
    label: 'Equip',
    icon: 'bx-calendar',
    link: '/listEquip',
  },
  {
    id: 9,
    label: 'Stock',
    icon: 'bx-calendar',
    link: '/listStock',
  },
    {
        id: 9,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/calendar',
    },
    {
        id: 10,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/chat',

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
    {
        id: 29,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 30,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 29
            },
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read/1',
                parentId: 29
            },
            {
                id: 32,
                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 29,
                subItems: [
                    {
                        id:33 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                        link: '/email/basic',
                        parentId:32
                    },
                    {
                        id:34 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                        link: '/email/alert',
                        parentId:32
                    },
                    {
                        id:35 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                        link: '/email/billing',
                        parentId:32
                    }
                ]
            }
        ]
    },


    {
        id: 56,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 57,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.AUTHENTICATION.BADGE',
        },
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/account/login',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/account/login-2',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/account/signup',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/account/signup-2',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/account/reset-password',
                parentId: 57
            },
            {
                id: 63,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/account/recoverpwd-2',
                parentId: 57
            },
            {
                id: 64,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 57
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/pages/lock-screen-2',
                parentId: 57
            },
            {
                id: 66,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/pages/confirm-mail',
                parentId: 57
            },
            {
                id: 67,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/pages/confirm-mail-2',
                parentId: 57
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/pages/email-verification',
                parentId: 57
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/pages/email-verification-2',
                parentId: 57
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/pages/two-step-verification',
                parentId: 57
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/pages/two-step-verification-2',
                parentId: 57
            }
        ]
    },
    {
        id: 72,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 73,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 72
            },
            {
                id: 74,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 72
            },
            {
                id: 74,
                label: 'Coming Soon',
                link: '/pages/coming-soon',
                parentId: 72
            },
            {
                id: 75,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 72
            },
            {
                id: 76,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 72
            },
            {
                id: 77,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 72
            },
            {
                id: 78,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 72
            },
            {
                id: 79,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 72
            },
        ]
    },
    {
        id: 80,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 81,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 82,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 81
            },
            {
                id: 83,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 81
            },
            {
                id: 84,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 81
            },
            {
                id: 85,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 81
            },
            {
                id: 86,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 81
            },
            {
                id: 87,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/ui/lightbox',
                parentId: 81
            },
            {
                id: 89,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 81
            },
            {
                id: 90,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 81
            },
            {
                id: 91,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 81
            },
            {
                id: 92,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/ui/placeholder',
                parentId: 81
            },
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 81
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 81
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 81
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 81
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 81
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 81
            },
            {
                id: 99,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/ui/image-crop',
                parentId: 81
            },
        ]
    },
    {
        id: 100,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 101,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 100
            },
            {
                id: 102,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/form/layouts',
                parentId: 100
            },
            {
                id: 103,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 100
            },
            {
                id: 104,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 100
            },
            {
                id: 105,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 100
            },
            {
                id: 106,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 100
            },
            {
                id: 107,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/form/repeater',
                parentId: 100
            },
            {
                id: 108,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 100
            },
            {
                id: 109,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 100
            }
        ]
    },
    {
        id: 118,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 119,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 118
            },
            {
                id: 120,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 118
            },
            {
                id: 121,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 118
            },
            {
                id: 122,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 118
            },
        ]
    },
    {
        id: 123,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        subItems: [
            {
                id: 124,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 123
            }
        ]
    },

];

