import { IsEmail, IsStrongPassword } from "class-validator"

export class CreateUserDto {
  @IsEmail()
  email: string

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string
}
