import { Injectable } from "@nestjs/common";

import { DatabaseService } from "src/common/database/services/database.service";

import { ContactMessageCreateDto } from "../dtos/request/contact-message.create.request";
import { ContactMessageResponseDto } from "../dtos/response/contact-message.response";

@Injectable()
export class ContactMessageService {
  constructor(private readonly databaseService: DatabaseService) {}

  public create(
    payload: ContactMessageCreateDto,
  ): Promise<ContactMessageResponseDto> {
    return this.databaseService.contactMessage.create({
      data: payload,
    }) as Promise<ContactMessageResponseDto>;
  }
}
