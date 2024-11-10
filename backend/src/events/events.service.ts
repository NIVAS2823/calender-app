import { Injectable } from '@nestjs/common';

 export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

@Injectable()
export class EventsService {
  private events: Event[] = [];

  // Method to add a new event
  create(event: Event): Event {
    event.id = this.events.length + 1;
    this.events.push(event);
    return event;
  }

  // Method to get all events
  findAll(): Event[] {
    return this.events;
  }
}
