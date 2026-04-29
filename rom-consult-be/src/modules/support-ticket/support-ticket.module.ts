import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/common/database/database.module";
import { RequestModule } from "src/common/request/request.module";

import { SupportTicketPublicController } from "./controllers/support-ticket.public.controller";
import { SupportTicketService } from "./services/support-ticket.service";

@Module({
  imports: [DatabaseModule, RequestModule],
  controllers: [SupportTicketPublicController],
  providers: [SupportTicketService],
  exports: [SupportTicketService],
})
export class SupportTicketModule {}
