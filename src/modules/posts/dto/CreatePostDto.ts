import { IsNotEmpty, IsString, IsUUID, MinLength } from "class-validator"

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  body: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsUUID("4")
  userId: string
}
