"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepo = void 0;
const AbstractRepo_1 = require("../../../../lib/infra/db/AbstractRepo");
const DatabaseModule_1 = require("../../../../lib/infra/db/DatabaseModule");
const PostEntity_model_1 = require("../entity/PostEntity.model");
class PostRepo extends AbstractRepo_1.AbstractRepo {
    async postExists(id) {
        try {
            const post = await this.findOne({ id });
            return !!post === true;
        }
        catch (error) {
            throw error;
        }
    }
    async findAllPostsByUser(dataQuery, userId) {
        const pageSize = (dataQuery === null || dataQuery === void 0 ? void 0 : dataQuery.pageSize) || 10;
        const currentPage = (dataQuery === null || dataQuery === void 0 ? void 0 : dataQuery.currentPage) || 1;
        const offset = (currentPage - 1) * pageSize;
        const res = await DatabaseModule_1.readConnection.getRepository(PostEntity_model_1.Posts).findAndCount({
            take: pageSize,
            skip: offset,
            where: { userId },
        });
        const [posts, total] = res;
        return {
            posts,
            pagination: {
                total,
                pageSize,
                currentPage,
            },
        };
    }
}
exports.PostRepo = PostRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdFJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wb3N0cy9pbmZyYS9yZXBvL1Bvc3RSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdFQUFvRTtBQUNwRSw0RUFBd0U7QUFDeEUsaUVBQWtEO0FBRWxELE1BQWEsUUFBUyxTQUFRLDJCQUFtQjtJQUN4QyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQVU7UUFDaEMsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDdkMsT0FBTyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQTtTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsTUFBTSxLQUFLLENBQUE7U0FDWjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBYyxFQUFFLE1BQWM7UUFDckQsTUFBTSxRQUFRLEdBQUcsQ0FBQSxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsUUFBUSxLQUFJLEVBQUUsQ0FBQTtRQUMxQyxNQUFNLFdBQVcsR0FBRyxDQUFBLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxXQUFXLEtBQUksQ0FBQyxDQUFBO1FBQy9DLE1BQU0sTUFBTSxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQTtRQUUzQyxNQUFNLEdBQUcsR0FBRyxNQUFNLCtCQUFjLENBQUMsYUFBYSxDQUFDLHdCQUFLLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFDakUsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUUsTUFBTTtZQUNaLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRTtTQUNsQixDQUFDLENBQUE7UUFFRixNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUUxQixPQUFPO1lBQ0wsS0FBSztZQUNMLFVBQVUsRUFBRTtnQkFDVixLQUFLO2dCQUNMLFFBQVE7Z0JBQ1IsV0FBVzthQUNaO1NBQ0YsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQWhDRCw0QkFnQ0MifQ==