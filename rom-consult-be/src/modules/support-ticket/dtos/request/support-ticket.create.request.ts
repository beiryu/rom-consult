import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

enum SupportCategory {
  TECHNICAL = "technical",
  BILLING = "billing",
  ACCOUNT = "account",
  SERVICE = "service",
  OTHER = "other",
}

export class SupportTicketCreateDto {
  @ApiProperty()
  @IsString()
  @MaxLength(200)
  fullName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  bookingId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  consultantId?: string;

  @ApiProperty({ enum: SupportCategory })
  @IsEnum(SupportCategory)
  category: SupportCategory;

  @ApiProperty()
  @IsString()
  @MaxLength(300)
  subject: string;

  @ApiProperty()
  @IsString()
  @MinLength(20)
  @MaxLength(8000)
  message: string;
}
