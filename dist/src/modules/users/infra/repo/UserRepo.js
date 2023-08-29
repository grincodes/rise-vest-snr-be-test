"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const UserEntity_model_1 = require("../entity/UserEntity.model");
const UserMap_1 = require("../../mappers/UserMap");
const AbstractRepo_1 = require("../../../../lib/infra/db/AbstractRepo");
const DatabaseModule_1 = require("../../../../lib/infra/db/DatabaseModule");
const CommentEntity_model_1 = require("../../../comments/infra/entity/CommentEntity.model");
class UserRepo extends AbstractRepo_1.AbstractRepo {
    constructor() {
        super(...arguments);
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.getPagination = (page = this.DEFAULT_PAGE, size = this.DEFAULT_SIZE) => {
            const limit = +size;
            const offset = page * limit;
            return { limit, offset };
        };
    }
    async saveUser(user) {
        const data = UserMap_1.UserMap.toPersistence(user);
        try {
            const res = await this.create(data);
            return {
                id: res.id,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findByUserId(id) {
        try {
            const user = await this.findOne({ id });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async findAllPaginatedUsers(data) {
        const pageSize = (data === null || data === void 0 ? void 0 : data.pageSize) || 10;
        const currentPage = (data === null || data === void 0 ? void 0 : data.currentPage) || 1;
        const offset = (currentPage - 1) * pageSize;
        const res = await DatabaseModule_1.readConnection.getRepository(UserEntity_model_1.Users).findAndCount({
            take: pageSize,
            skip: offset,
            select: ["id", "firstName", "lastName", "email", "createdAt", "updatedAt", "version"],
        });
        const [users, total] = res;
        return {
            users,
            pagination: {
                total,
                pageSize,
                currentPage,
            },
        };
    }
    async findByEmail(email) {
        try {
            const user = await this.findOne({ email });
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async userExists(email) {
        try {
            const user = await this.findOne({ email });
            return !!user === true;
        }
        catch (error) {
            throw error;
        }
    }
    async getTop3UsersWithLatestCommentsAndPosts() {
        const queryBuilder = await DatabaseModule_1.readConnection
            .getRepository(UserEntity_model_1.Users)
            .createQueryBuilder("user")
            .innerJoin((subQuery) => subQuery.from(CommentEntity_model_1.Comments, "comment").select("MAX(comment.createdAt)", "createdAt").addSelect("comment.userId", "userId").groupBy("comment.userId"), "latestComments", "user.id = latestComments.userId")
            .innerJoin("user.posts", "posts")
            .select(["user.id", "user.name", "posts.title", "latestComments.createdAt"])
            .orderBy("latestComments.createdAt", "DESC")
            .limit(3);
        return queryBuilder.getRawMany();
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9pbmZyYS9yZXBvL1VzZXJSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlFQUFrRDtBQUVsRCxtREFBK0M7QUFFL0Msd0VBQW9FO0FBQ3BFLDRFQUF3RTtBQUV4RSw0RkFBNkU7QUFTN0UsTUFBYSxRQUFTLFNBQVEsMkJBQW1CO0lBQWpEOztRQUNFLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBbUZoQixrQkFBYSxHQUFHLENBQUMsT0FBZSxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQWUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JGLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBQ25CLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUE7WUFFM0IsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQTtRQUMxQixDQUFDLENBQUE7SUFDSCxDQUFDO0lBdkZRLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBVTtRQUM5QixNQUFNLElBQUksR0FBRyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4QyxJQUFJO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRW5DLE9BQU87Z0JBQ0wsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2FBQ1gsQ0FBQTtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLEtBQUssQ0FBQTtTQUNaO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBVTtRQUMzQixJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMs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