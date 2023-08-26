import { IsNotEmpty, MinLength } from "class-validator";

export class CreateFighterDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    @MinLength(3)
    location: string;

}