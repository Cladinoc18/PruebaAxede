import { IsDateString, IsInt, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateReservaDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  habitacionId: number;

  @IsDateString()
  @IsNotEmpty()
  fechaInicio: string;

  @IsDateString()
  @IsNotEmpty()
  fechaFin: string;
}
