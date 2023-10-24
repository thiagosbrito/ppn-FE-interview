import {User} from "../user";

export interface UserState extends User {
  error?: string;
}
