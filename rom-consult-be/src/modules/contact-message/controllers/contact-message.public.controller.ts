import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { DocResponse } from "src/common/doc/decorators/doc.response.decorator";
import { PublicRoute } from "src/common/request/decorators/request.public.decorator";

import { ContactMessageCreateDto } from "../dtos/request/contact-message.create.request";
import { ContactMessageResponseDto } from "../dtos/response/contact-message.response";
import { ContactMessageService } from "../services/contact-message.service";

@ApiTags("public.contact-message")
@Controller({ path: "/contact-messages", version: "1" })
export class ContactMessagePublicController {
  constructor(private readonly contactMessageService: ContactMessageService) {}

  @Post()
  @PublicRoute()
  @ApiOperation({ summary: "Submit contact message" })
  @DocResponse({
    serialization: ContactMessageResponseDto,
    httpStatus: HttpStatus.CREATED,
    messageKey: "contactMessage.success.created",
  })
  public create(
    @Body() payload: ContactMessageCreateDto,
  ): Promise<ContactMessageResponseDto> {
    return this.contactMessageService.create(payload);
  }
}
