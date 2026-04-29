import { Module } from "@nestjs/common";

import { DatabaseModule } from "src/common/database/database.module";
import { RequestModule } from "src/common/request/request.module";

import { ContactMessagePublicController } from "./controllers/contact-message.public.controller";
import { ContactMessageService } from "./services/contact-message.service";

@Module({
  imports: [DatabaseModule, RequestModule],
  controllers: [ContactMessagePublicController],
  providers: [ContactMessageService],
  exports: [ContactMessageService],
})
export class ContactMessageModule {}
