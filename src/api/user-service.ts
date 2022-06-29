import { AxiosInstance } from 'axios';
import { User } from '../models/user';

export class UserService {
  constructor(private httpClient: AxiosInstance) {}

  getUser(uuid: string): Promise<User> {
    return this.httpClient.get(`/users/${uuid}`);
  }

  getCurrentUser(): Promise<User> {
    return this.httpClient.get('/users/me').then(result => result.data?.resource as User);
  }
}