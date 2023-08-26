import { IsNotEmpty, MinLength } from "class-validator";

export class CreateFighterDto {
    @IsNotEmpty()
    @MinLength(3)
    result: string;
}