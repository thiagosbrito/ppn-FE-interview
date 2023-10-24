import {Settings} from "../settings";

export interface SettingsState extends Settings {
  error?: string;
}
