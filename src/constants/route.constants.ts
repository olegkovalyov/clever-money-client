export const SIGN_IN_URL = '/signin';
export const SIGN_UP_URL = '/signup';
export const FORGOT_PASSWORD_URL = '/forgot-password';
export const RESET_PASSWORD_URL = '/reset-password';

export const HOME_URL = '/';
// Dashboard
export const DASHBOARD_URL = '/dashboard';
// Manage
export const MEMBERS_URL = '/members';
export const CREATE_MEMBER_URL = '/members/create';
export const EDIT_MEMBER_URL = '/members/[id]';
export const MANAGE_INVENTORY_URL = '/inventory';

// Events
export const EVENTS_URL = '/events';
export const CREATE_EVENT_URL = '/events/create';
export const EDIT_EVENT_URL = '/events/:id';
export const HISTORY_URL = '/history';
export const LOADS_URL = '/events/:eventId/loads';

// Clients
export const CLIENTS_URL = '/clients';
export const CREATE_CLIENT_URL = '/clients/create';
export const EDIT_CLIENT_URL = '/clients/[id]';

// Loads

// Settings
export const SETTINGS_URL = '/settings';

export const NO_MATCH_URL = '*';


export const breadcrumbs = [
  {
    path: DASHBOARD_URL,
    parts: [
      {
        url: DASHBOARD_URL,
        title: 'Dashboard',
      },
    ],
  },
  {
    path: MEMBERS_URL,
    parts: [
      {
        url: MEMBERS_URL,
        title: 'Members',
      },
    ],
  },
  {
    path: CREATE_MEMBER_URL,
    parts: [
      {
        url: MEMBERS_URL,
        title: 'Members',
      },
      {
        url: CREATE_MEMBER_URL,
        title: 'Create',
      },
    ],
  },
  {
    path: EDIT_MEMBER_URL,
    parts: [
      {
        url: MEMBERS_URL,
        title: 'Members',
      },
      {
        url: EDIT_MEMBER_URL,
        title: '[id]',
      },
    ],
  },
  {
    path: CLIENTS_URL,
    parts: [
      {
        url: CLIENTS_URL,
        title: 'Clients',
      },
    ],
  },
  {
    path: CREATE_CLIENT_URL,
    parts: [
      {
        url: CLIENTS_URL,
        title: 'Clients',
      },
      {
        url: CREATE_CLIENT_URL,
        title: 'Create',
      },
    ],
  },
  {
    path: EDIT_CLIENT_URL,
    parts: [
      {
        url: CLIENTS_URL,
        title: 'Clients',
      },
      {
        url: EDIT_CLIENT_URL,
        title: '[id]',
      },
    ],
  },
];

// export const breadcrumbsMap: { [key: string]: string } = {
//   [MANAGE_INVENTORY_URL]: 'Inventory',
//   [SETTINGS_URL]: 'Settings',
//   [EVENTS_URL]: 'Events',
//   [CREATE_EVENT_URL]: 'Create',
//   [LOADS_URL]: 'Loads',
//   [HISTORY_URL]: 'History',
//   [CLIENTS_URL]: 'Clients',
//   [CREATE_CLIENT_URL]: 'Create',
// };

export const routePaths = [
  HOME_URL,
  DASHBOARD_URL,
  MEMBERS_URL,
  CREATE_MEMBER_URL,
  EDIT_MEMBER_URL,
  MANAGE_INVENTORY_URL,
  SETTINGS_URL,
  EVENTS_URL,
  LOADS_URL,
  CREATE_EVENT_URL,
  EDIT_EVENT_URL,
  HISTORY_URL,
  CLIENTS_URL,
  CREATE_CLIENT_URL,
  EDIT_CLIENT_URL,
];

