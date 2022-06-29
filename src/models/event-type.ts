import { BookingMethod } from '../enums/booking-method';
import { Kind } from '../enums/kind';
import { PoolingType } from '../enums/pooling-type';
import { QuestionType } from '../enums/question-type';
import { Profile } from './profile';

export interface CustomQuestion {
  name: string;
  answer_choices?: string[];
  enabled: boolean;
  include_other: boolean;
  position: number;
  required: boolean;
  type: QuestionType;
}

export interface EventType {
  uri: string;
  name: string;
  active: boolean;
  booking_method: BookingMethod,
  slug: string;
  scheduling_url: string;
  duration: number;
  kind: Kind;
  pooling_type?: PoolingType,
  type: EventType;
  color: string;
  created_at: string;
  updated_at: string;
  internal_note?: string;
  description_plain?: string;
  description_html?: string;
  profile: Profile;
  secret: boolean;
  deleted_at?: string;
  custom_questions: CustomQuestion[],
}
