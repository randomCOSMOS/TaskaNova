import { IsString, MinLength } from 'class-validator';

export class taskDto {
  @IsString({ message: 'The title should be a String!' })
  @MinLength(5)
  title: string;

  @IsString({ message: 'The description should be a String!' })
  description: string;

  @IsString({ message: 'The Status should be a String!' })
  status: string;
}
