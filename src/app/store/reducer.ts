import * as FromUserActions from './actions/load-user/load-user.actions';
import * as FromUserListActions from './actions/load-user-list/load-user-list.actions';
import * as FromSettingsActions from './actions/load-settings/load-settings.actions';
import { UserListState } from "../interfaces/states/user-list.state";
import { UserState } from "../interfaces/states/user.state";
import { SettingsState } from "../interfaces/states/settings.state";

const initialUserListState: UserListState = {
  list: [],
}

const initialUserState: UserState = {
  id: 0,
  name: '',
  email: '',
  dob: '',
  address: {
    street_name: '',
    complement: '',
    number: 0,
    city: '',
    zip_code: '',
  },
  error: '',
};

const initialSettingsState: SettingsState = {
  theme: 'default',
  language: 'EN',
  error: '',
}

export function userListReducer(state: UserListState = initialUserListState, action: FromUserListActions.UserListActions): UserListState {
  // Try to play with State class
  switch (action.type) {
    case FromUserListActions.UserListActionTypes.LOAD_USER_LIST:
      return {...state, ...(action as FromUserListActions.LoadUserList).payload};
    case FromUserListActions.UserListActionTypes.LOAD_USER_LIST_SUCCESS:
      return {...state, ...(action as FromUserListActions.LoadUserListSuccess).payload};
    default:
      return state;
  }
}


export function userReducer(state: UserState = initialUserState, action: FromUserActions.UserActions): UserState {
  switch (action.type) {
    case FromUserActions.UserActionTypes.LOAD_USER:
      return { ...state, ...(action as FromUserActions.LoadUser).payload };
    case FromUserActions.UserActionTypes.LOAD_USER_SUCCESS:
      return { ...state, ...(action as FromUserActions.LoadUserSuccess).payload };
    default:
      return state;
  }
}

export function settingsReducer(state: SettingsState = initialSettingsState, action: FromSettingsActions.SettingsActions): SettingsState {
  switch (action.type) {
    case FromSettingsActions.SettingsActionTypes.LOAD_SETTINGS:
      return { ...state, ...(action as FromSettingsActions.LoadSettings).payload };
    case FromSettingsActions.SettingsActionTypes.LOAD_SETTINGS_SUCCESS:
      const { theme, language } = (action as FromSettingsActions.LoadSettingsSuccess).payload;
      return {
        theme: theme ? theme : state.theme,
        language: language ? language : state.language,
      };
    default:
      return state;
  }
}
