import { Users } from "../entity/UserEntity.model"
import { CreateResponse } from "../../../../lib/common/constants"
import { UserMap } from "../../mappers/UserMap"
import { User } from "../../domain/User"
import { AbstractRepo } from "../../../../lib/infra/db/AbstractRepo"
import { readConnection } from "../../../../lib/infra/db/DatabaseModule"
import { SelectQueryBuilder } from "typeorm"
import { Comments } from "../../../comments/infra/entity/CommentEntity.model"

export interface IUserRepo {
  saveUser(user: User)
  findByUserId(id: string)
  findByEmail(email: string)
  userExists(email: string)
}

export class UserRepo extends AbstractRepo<Users> implements IUserRepo {
  DEFAULT_PAGE = 0
  DEFAULT_SIZE = 5

  public async saveUser(user: User): Promise<CreateResponse> {
    const data = UserMap.toPersistence(user)

    try {
      const res = await this.create(data)

      return {
        id: res.id,
      }
    } catch (error) {
      throw error
    }
  }

  async findByUserId(id: string): Promise<Users | null> {
    try {
      const user = await this.findOne({ id })
      return user
    } catch (error) {
      throw error
    }
  }

  async findAllPaginatedUsers(data: any) {
    const pageSize = data?.pageSize || 10
    const currentPage = data?.currentPage || 1
    const offset = (currentPage - 1) * pageSize

    const res = await readConnection.getRepository(Users).findAndCount({
      take: pageSize,
      skip: offset,
      select: ["id", "firstName", "lastName", "email", "createdAt", "updatedAt", "version"],
    })

    const [users, total] = res

    return {
      users,
      pagination: {
        total,
        pageSize,
        currentPage,
      },
    }
  }

  async findByEmail(email: string): Promise<Users | null> {
    try {
      const user = await this.findOne({ email })
      return user
    } catch (error) {
      throw error
    }
  }

  public async userExists(email: string): Promise<boolean> {
    try {
      const user = await this.findOne({ email })
      return !!user === true
    } catch (error) {
      throw error
    }
  }

 

  getPagination = (page: number = this.DEFAULT_PAGE, size: number = this.DEFAULT_SIZE) => {
    const limit = +size
    const offset = page * limit

    return { limit, offset }
  }
}
