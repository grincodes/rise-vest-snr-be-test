import { SelectQueryBuilder } from "typeorm"
import { AbstractRepo } from "../../../../lib/infra/db/AbstractRepo"
import { readConnection } from "../../../../lib/infra/db/DatabaseModule"
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

    const res = readConnection.getRepository(Users)
      .createQueryBuilder('user')
      .select(['user.id', 'user.name', 'post.title', 'comment.content'])
      .leftJoin('user.posts', 'post')
      .leftJoin(
        (subQuery) => {
          subQuery
            .select(['MAX(comment.createdAt) as maxCreatedAt', 'comment.postId'])
            .from(Comments, 'comment')
            .groupBy('comment.postId')
            // .as('latestComment');
        },
        'lc',
        'lc.postId = post.id'
      )
      .leftJoin(
        (subQuery) => {
          subQuery
            .select(['COUNT(post.id) as postCount', 'post.userId'])
            .from(Posts, 'post')
            .groupBy('post.userId')
            // .as('postCount');
        },
        'upc',
        'upc.userId = user.id'
      )
      .leftJoin('commentRepository', 'comment', 'comment.postId = post.id AND comment.createdAt = lc.maxCreatedAt')
      .orderBy('upc.postCount', 'DESC')
      .limit(3).getMany();



 

console.log('====================================');
console.log(res);
console.log('====================================');
   
    return res
      
    } catch (error) {
      
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    }
  
  }
}
