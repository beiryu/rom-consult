import { HttpException, HttpStatus, Injectable } from "@nestjs/common";

import { DatabaseService } from "src/common/database/services/database.service";

import { SupportTicketCreateDto } from "../dtos/request/support-ticket.create.request";
import { SupportTicketResponseDto } from "../dtos/response/support-ticket.response";

@Injectable()
export class SupportTicketService {
  constructor(private readonly databaseService: DatabaseService) {}

  public create(
    payload: SupportTicketCreateDto,
  ): Promise<SupportTicketResponseDto> {
    const reference = `TK-${Math.random().toString(36).slice(2, 12).toUpperCase()}`;
    return this.databaseService.supportTicket.create({
      data: {
        ...payload,
        publicReference: reference,
      },
    }) as Promise<SupportTicketResponseDto>;
  }

  public async lookup(
    publicReference: string,
    email: string,
  ): Promise<SupportTicketResponseDto> {
    const ticket = await this.databaseService.supportTicket.findFirst({
      where: {
        publicReference,
        email,
      },
    });

    if (!ticket) {
      throw new HttpException(
        "supportTicket.error.notFound",
        HttpStatus.NOT_FOUND,
      );
    }

    return ticket as SupportTicketResponseDto;
  }
}
