import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { SupportTicket, SupportTicketStatus } from "@prisma/client";
import { Expose } from "class-transformer";
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator";

export class SupportTicketResponseDto implements SupportTicket {
  @ApiProperty({ example: faker.string.uuid() })
  @Expose()
  @IsUUID()
  id: string;

  @ApiProperty({ example: "TK-AB12CD34EF" })
  @Expose()
  @IsString()
  publicReference: string;

  @ApiProperty()
  @Expose()
  @IsString()
  fullName: string;

  @ApiProperty()
  @Expose()
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ nullable: true })
  @Expose()
  @IsOptional()
  @IsString()
  bookingId: string | null;

  @ApiPropertyOptional({ nullable: true })
  @Expose()
  @IsOptional()
  @IsString()
  consultantId: string | null;

  @ApiProperty()
  @Expose()
  @IsString()
  category: string;

  @ApiProperty()
  @Expose()
  @IsString()
  subject: string;

  @ApiProperty()
  @Expose()
  @IsString()
  message: string;

  @ApiProperty({ enum: SupportTicketStatus })
  @Expose()
  @IsEnum(SupportTicketStatus)
  status: SupportTicketStatus;

  @ApiProperty({ example: faker.date.past().toISOString() })
  @Expose()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: faker.date.recent().toISOString() })
  @Expose()
  @IsDate()
  updatedAt: Date;
}
