import { Controller, Get, Post, Body } from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() event: any) {
    return this.eventsService.create(event);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }
}
