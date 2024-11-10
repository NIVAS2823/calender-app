import { Module } from '@nestjs/common';
import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';

@Module({
  imports: [],
  controllers: [EventsController],  // Make sure EventsController is here
  providers: [EventsService],  // Make sure EventsService is here
})
export class AppModule {}
