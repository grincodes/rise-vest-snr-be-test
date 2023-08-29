import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm"
import { BaseEntity } from "../../../../lib/infra/db/BaseEntity"
import { Users } from "../../../users/infra/entity/UserEntity.model"
import { Comments } from "../../../comments/infra/entity/CommentEntity.model"

@Entity()
export class Posts extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  userId: string

  @Column()
  title: string

  @Column()
  body: string

  @ManyToOne(() => Users, (user) => user.posts)
  @JoinColumn({ name: "userId" })
  user?: Users

  @OneToMany(() => Comments, (comment) => comment.post, { cascade: true })
  comment?: Comments[]
}
