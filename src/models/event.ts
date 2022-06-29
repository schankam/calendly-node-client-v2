import { EventLocationType } from '../enums/event-location-type';
import { ScheduledEventStatus } from '../enums/scheduled-event-status';

export interface EventGuest {
  email: string;
  created_at: string;
  updated_at: string;
}

export interface InviteesCounter {
  total: number;
  active: number;
  limit: number;
}

export interface EventMembership {
  user: string;
}

export interface EventLocation {
  type: EventLocationType;
  location: string;
}

export interface ScheduledEvent {
  uri: string;
  name: string;
  status: ScheduledEventStatus;
  start_time: string;
  end_time: string;
  event_type: string;
  location: EventLocation;
  invitees_counter: InviteesCounter;
  created_at: string;
  updated_at: string;
  event_memberships: EventMembership[];
  event_guests: EventGuest[];
}