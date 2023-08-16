import { IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    @MinLength(3)
    location: string;

}