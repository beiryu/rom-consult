import { Body, Controller, Get, HttpStatus, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

import { DocResponse } from "src/common/doc/decorators/doc.response.decorator";
import { PublicRoute } from "src/common/request/decorators/request.public.decorator";

import { SupportTicketCreateDto } from "../dtos/request/support-ticket.create.request";
import { SupportTicketResponseDto } from "../dtos/response/support-ticket.response";
import { SupportTicketService } from "../services/support-ticket.service";

class SupportTicketLookupQueryDto {
  @IsString()
  ticketId: string;

  @IsEmail()
  email: string;
}

@ApiTags("public.support-ticket")
@Controller({ path: "/support-tickets", version: "1" })
export class SupportTicketPublicController {
  constructor(private readonly supportTicketService: SupportTicketService) {}

  @Post()
  @PublicRoute()
  @ApiOperation({ summary: "Submit support ticket" })
  @DocResponse({
    serialization: SupportTicketResponseDto,
    httpStatus: HttpStatus.CREATED,
    messageKey: "supportTicket.success.created",
  })
  public create(
    @Body() payload: SupportTicketCreateDto,
  ): Promise<SupportTicketResponseDto> {
    return this.supportTicketService.create(payload);
  }

  @Get("lookup")
  @PublicRoute()
  @ApiOperation({ summary: "Lookup support ticket by ticket ID and email" })
  @DocResponse({
    serialization: SupportTicketResponseDto,
    httpStatus: HttpStatus.OK,
    messageKey: "supportTicket.success.found",
  })
  public lookup(
    @Query() query: SupportTicketLookupQueryDto,
  ): Promise<SupportTicketResponseDto> {
    return this.supportTicketService.lookup(query.ticketId, query.email);
  }
}
