import { LayoutActionTypes } from './layout.actions';
import {
  CLOSE_LEFT_MENU,
  CLOSE_TOP_MENU,
  COLLAPSE_CLIENTS_FILTER,
  COLLAPSE_MEMBERS_FILTER,
  EXPAND_CLIENTS_FILTER,
  EXPAND_MEMBERS_FILTER,
  OPEN_LEFT_MENU,
  OPEN_TOP_MENU,
} from './layout.types';

export interface LayoutStateInterface {
  isOpenedLeftMenu: boolean,
  isOpenedTopMenu: boolean,
  isExpandedMembersFilter: boolean,
  isExpandedClientsFilter: boolean,
}

export const uiState: LayoutStateInterface = {
  isOpenedLeftMenu: true,
  isOpenedTopMenu: false,
  isExpandedMembersFilter: false,
  isExpandedClientsFilter: false,
};

export const layoutReducer = (state = uiState, action: LayoutActionTypes): LayoutStateInterface => {
  switch (action.type) {
    case OPEN_LEFT_MENU: {
      return {
        ...state,
        isOpenedLeftMenu: true,
      };
    }
    case CLOSE_LEFT_MENU: {
      return {
        ...state,
        isOpenedLeftMenu: false,
      };
    }
    case OPEN_TOP_MENU: {
      return {
        ...state,
        isOpenedTopMenu: true,
      };
    }
    case CLOSE_TOP_MENU: {
      return {
        ...state,
        isOpenedTopMenu: false,
      };
    }
    case EXPAND_MEMBERS_FILTER: {
      return {
        ...state,
        isExpandedMembersFilter: true,
      };
    }
    case COLLAPSE_MEMBERS_FILTER: {
      return {
        ...state,
        isExpandedMembersFilter: false,
      };
    }
    case EXPAND_CLIENTS_FILTER: {
      return {
        ...state,
        isExpandedClientsFilter: true,
      };
    }
    case COLLAPSE_CLIENTS_FILTER: {
      return {
        ...state,
        isExpandedClientsFilter: false,
      };
    }
    default:
      // eslint-disable-next-line no-case-declarations,no-unused-vars,@typescript-eslint/no-unused-vars
      const x: never = action;
  }
  return state;
};
