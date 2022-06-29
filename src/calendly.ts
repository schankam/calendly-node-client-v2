import axios, { AxiosInstance } from 'axios';
import { UserService } from './api/user-service';

const API_ROOT = 'https://api.calendly.com/';

export class Calendly {
  private httpClient: AxiosInstance;
  private userService: UserService;

  constructor(authToken: string) {
    this.httpClient = axios.create({
      baseURL: API_ROOT,
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
    });
    this.userService = new UserService(this.httpClient);
  }

  get user() {
    return this.userService;
  }
}