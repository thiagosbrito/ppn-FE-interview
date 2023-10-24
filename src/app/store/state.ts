import { User } from "../interfaces/user";
import { Settings } from "../interfaces/settings";
import { UserList } from "../interfaces/user-list";

export interface AppState {
  user: User;
  userList: UserList;
  userSettings: Settings;
}
