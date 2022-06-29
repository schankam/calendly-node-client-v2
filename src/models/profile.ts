import { ProfileType } from '../enums/profile-type';

export interface Profile {
  type: ProfileType;
  name: string;
  owner: string;
}
