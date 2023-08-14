import { IsNumber, IsNotEmpty, MinLength, IsEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    @MinLength(3)
    weight_class: string;

    @IsNotEmpty()
    @MinLength(3)
    nationality: string;

    @IsNotEmpty()
    @MinLength(3)
    team: string;

    @IsNotEmpty()
    @IsNumber()
    wins: number;

    @IsNotEmpty()
    @IsNumber()
    losses: number;

    @IsNotEmpty()
    @IsNumber()
    knockouts: number;

    @IsNotEmpty()
    @IsNumber()
    submissions: number;
}