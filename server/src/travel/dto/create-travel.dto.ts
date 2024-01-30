import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTravelDto {
  id: string;

  @IsString()
  date: string;

  @IsString()
  //   @MinLength(2, { message: 'Name must have at least 2 characters.' })
  @IsNotEmpty()
  name: string;

  @IsString()
  port_address: string;

  @IsString()
  arrival_address: string;

  @IsString()
  cellphone_number: string;

  amount: number;

  status: string;
}
