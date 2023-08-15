import { IsNumber, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    weight_class: string;

    @IsNotEmpty()
    @IsNumber()
    rank: number;
}