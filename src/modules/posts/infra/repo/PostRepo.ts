import { SelectQueryBuilder } from "typeorm"
import { AbstractRepo } from "../../../../lib/infra/db/AbstractRepo"
import { readConnection, writeConnection } from "../../../../lib/infra/db/DatabaseModule"
import { Comments } from "../../../comments/infra/entity/CommentEntity.model"
import { Users } from "../../../users/infra/entity/UserEntity.model"
import { Posts } from "../entity/PostEntity.model"
import { LatestPosts } from '../../../../lib/common/constants/index';

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

   public async getTop3UsersWithLatestCommentsAndPosts(): Promise<any> {

    try {
 
const res = await readConnection.getRepository(Users).query(`SELECT
  users.id,
  users."firstName",
  posts.title,
  comments.content,
  MAX(comments."createdAt") OVER (PARTITION BY posts."userId") AS latest_comment_created_at
FROM users
LEFT JOIN posts ON users.id = posts."userId"
INNER JOIN comments ON posts.id = comments."postId"
ORDER BY (SELECT COUNT(posts.id) FROM posts WHERE posts."userId" = users.id) DESC
LIMIT 3;`);

   
    return res
      
    } catch (error) {
      
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  
  }
}
