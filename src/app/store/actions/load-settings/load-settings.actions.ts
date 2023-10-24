import { Action } from '@ngrx/store';
import { Settings } from "../../../interfaces/settings";

export enum SettingsActionTypes {
  LOAD_SETTINGS = '[Settings] Load Settings',
  LOAD_SETTINGS_SUCCESS = '[Settings] Load Settings Success',
  LOAD_SETTINGS_FAIL = '[Settings] Load Settings Fail',
}

export class LoadSettings implements Action {
  readonly type: string = SettingsActionTypes.LOAD_SETTINGS;
  constructor(public payload?: Settings) {}
}

export class LoadSettingsFail implements Action {
  readonly type: string = SettingsActionTypes.LOAD_SETTINGS_FAIL;
  constructor(public payload: { error: string }) {}
}

export class LoadSettingsSuccess implements Action {
  readonly type: string = SettingsActionTypes.LOAD_SETTINGS_SUCCESS;

  constructor(public payload: Settings) { }
}

export type SettingsActions = LoadSettings | LoadSettingsFail | LoadSettingsSuccess;
