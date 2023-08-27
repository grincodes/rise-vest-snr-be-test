import { Entity, Column, PrimaryColumn } from "typeorm"
import { BaseEntity } from "./BaseEntity"

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

}
