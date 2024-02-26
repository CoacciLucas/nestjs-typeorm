import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateCatDto implements Readonly<CreateCatDto> {
  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(170)
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @MaxLength(80)
  color: string;
}