import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreatePostReq {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  body: string
}
