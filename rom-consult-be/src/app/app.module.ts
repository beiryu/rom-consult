import { Module } from "@nestjs/common";
import { TerminusModule } from "@nestjs/terminus";

import { CommonModule } from "src/common/common.module";
import { UserModule } from "src/modules/user/user.module";
import { BookingModule } from "src/modules/booking/booking.module";
import { ConsultantApplicationModule } from "src/modules/consultant-application/consultant-application.module";
import { ContactMessageModule } from "src/modules/contact-message/contact-message.module";
import { SupportTicketModule } from "src/modules/support-ticket/support-ticket.module";
import { ProductModule } from "src/modules/product/product.module";

import { HealthController } from "./controllers/health.controller";
@Module({
  imports: [
    // Shared Common Services
    CommonModule,

    // Health Check
    TerminusModule,

    // Feature Modules
    UserModule,
    BookingModule,
    ConsultantApplicationModule,
    ContactMessageModule,
    SupportTicketModule,
    ProductModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
