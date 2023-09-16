import { IsString, IsNotEmpty } from 'class-validator';

export class producerDTO {
  @IsString()
  @IsNotEmpty()
  data: string;
}
