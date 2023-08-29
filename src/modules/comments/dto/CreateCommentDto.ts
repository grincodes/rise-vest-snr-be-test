import { IsNotEmpty, IsString, IsUUID, MinLength } from "class-validator"

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  comment: string

  @IsUUID("4")
  postId: string

  @IsUUID("4")
  userId: string
}