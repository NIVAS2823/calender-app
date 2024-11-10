// src/events/events.service.ts
import { Injectable } from '@nestjs/common';
import { Event } from './event.entity'; // Correct path to the Event class

@Injectable()
export class EventsService {
  private readonly events: Event[] = [];

  create(event: Event): Event {
    this.events.push(event);
    return event;
  }

  findAll(): Event[] {
    return this.events;
  }

  findOne(id: number): Event {
    return this.events.find(event => event.id === id);
  }

  update(id: number, updatedEvent: Event): Event {
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex > -1) {
      this.events[eventIndex] = updatedEvent;
      return updatedEvent;
    }
  }

  delete(id: number): void {
    const eventIndex = this.events.findIndex(event => event.id === id);
    if (eventIndex > -1) {
      this.events.splice(eventIndex, 1);
    }
  }
}
