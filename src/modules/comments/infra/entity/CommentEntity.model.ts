import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { BaseEntity } from "../../../../lib/infra/db/BaseEntity"
import { Posts } from "../../../posts/infra/entity/PostEntity.model"
import { Users } from "../../../users/infra/entity/UserEntity.model"

@Entity()
export class Comments extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column()
  postId: string

  @Column()
  userId: string

  @Column()
  content: string

  @ManyToOne(() => Posts, (post) => post.comment)
  @JoinColumn({ name: "postId" })
  post?: Posts

  @ManyToOne(() => Users, (user) => user.comments)
  @JoinColumn({ name: "userId" })
  user?: Users
}
