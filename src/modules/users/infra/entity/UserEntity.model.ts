import { Entity, Column, PrimaryColumn, OneToMany, JoinTable } from "typeorm"
import { BaseEntity } from "../../../../lib/infra/db/BaseEntity"
import { Posts } from "../../../posts/infra/entity/PostEntity.model"
import { Comments } from "../../../comments/infra/entity/CommentEntity.model"

@Entity()
export class Users extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @OneToMany(() => Posts, (post) => post.user, { cascade: true })
  posts?: Posts[]

  @OneToMany(() => Comments, (comment) => comment.user, { cascade: true })
  comments?: Comments[]
}
