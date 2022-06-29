import { AxiosInstance } from 'axios';
import { ScheduledEvent } from '../models/event';
import { OrganizationScope, UserScope } from './scope';

export class ScheduledEventsService {
  constructor(private httpClient: AxiosInstance) { }

  async listEvents(scope: UserScope | OrganizationScope): Promise<ScheduledEvent[]> {
    const params: any = scope;
    return this.httpClient.get('/scheduled_events', { params }).then(result => result.data.collection as ScheduledEvent[]);
  }
}
