import { IsNotEmpty, IsString, IsUUID, MinLength } from "class-validator"

export class CreateCommentReq {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  content: string
}
