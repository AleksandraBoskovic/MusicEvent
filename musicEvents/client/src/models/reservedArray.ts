import { Event } from './event';
import { Reserved } from './reserved';
export interface ReservedArray {
  message: string;
  savedEvent: {
    eventsAndTickets:[{
      _id: string,
      numOfTickets: Number,
    }],
    _id: string,
    username: string,
    __v: Number
  };
}
