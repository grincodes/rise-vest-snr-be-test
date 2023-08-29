import { AbstractRepo } from "../../../../lib/infra/db/AbstractRepo"
import { readConnection } from "../../../../lib/infra/db/DatabaseModule"
import { Posts } from "../entity/PostEntity.model"

export class PostRepo extends AbstractRepo<Posts> {
  public async postExists(id: string): Promise<boolean> {
    try {
      const post = await this.findOne({ id })
      return !!post === true
    } catch (error) {
      throw error
    }
  }

  async findAllPostsByUser(dataQuery: any, userId: string) {
    const pageSize = dataQuery?.pageSize || 10
    const currentPage = dataQuery?.currentPage || 1
    const offset = (currentPage - 1) * pageSize

    const res = await readConnection.getRepository(Posts).findAndCount({
      take: pageSize,
      skip: offset,
      where: { userId },
    })

    const [posts, total] = res

    return {
      posts,
      pagination: {
        total,
        pageSize,
        currentPage,
      },
    }
  }
}
