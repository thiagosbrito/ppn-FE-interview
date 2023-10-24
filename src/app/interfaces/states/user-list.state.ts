import {UserList} from "../user-list";

export interface UserListState extends UserList {
  error?: string;
}
