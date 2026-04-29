import { ApiProperty } from "@nestjs/swagger";
import { faker } from "@faker-js/faker";
import { ContactMessage } from "@prisma/client";
import { Expose } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsString, IsUUID } from "class-validator";

export class ContactMessageResponseDto implements ContactMessage {
  @ApiProperty({ example: faker.string.uuid() })
  @Expose()
  @IsUUID()
  id: string;

  @ApiProperty()
  @Expose()
  @IsString()
  firstName: string;

  @ApiProperty()
  @Expose()
  @IsString()
  lastName: string;

  @ApiProperty()
  @Expose()
  @IsEmail()
  email: string;

  @ApiProperty({ nullable: true })
  @Expose()
  @IsString()
  phone: string | null;

  @ApiProperty()
  @Expose()
  @IsString()
  message: string;

  @ApiProperty()
  @Expose()
  @IsBoolean()
  privacyAccepted: boolean;

  @ApiProperty({ example: faker.date.past().toISOString() })
  @Expose()
  @IsDate()
  createdAt: Date;

  @ApiProperty({ example: faker.date.recent().toISOString() })
  @Expose()
  @IsDate()
  updatedAt: Date;
}
