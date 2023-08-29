"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const DomainError_1 = require("../../../lib/core/logic/DomainError");
const Result_1 = require("../../../lib/core/logic/Result");
const Post_1 = require("../domain/Post");
const PostMap_1 = require("../mappers/PostMap");
require("reflect-metadata");
class PostService {
    constructor(postRepo) {
        this.postRepo = postRepo;
    }
    async createPost(createPostDto) {
        try {
            const postOrError = Post_1.Post.create(createPostDto);
            if (postOrError.isFailure) {
                return (0, Result_1.left)(DomainError_1.DomainError.create(postOrError.errorValue()));
            }
            const post = postOrError.getValue();
            const data = PostMap_1.PostMap.toPersistence(post);
            const res = await this.postRepo.create(data);
            return (0, Result_1.right)(Result_1.Result.ok({
                id: res.id,
            }));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
    async postExists(id) {
        try {
            const res = await this.postRepo.postExists(id);
            return (0, Result_1.right)(Result_1.Result.ok(res));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
    async getUserPaginatedPosts(dto, userId) {
        try {
            const res = await this.postRepo.findAllPostsByUser(dto, userId);
            return (0, Result_1.right)(Result_1.Result.ok(res));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
}
exports.PostService = PostService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wb3N0cy91c2VDYXNlcy9Qb3N0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxRUFBaUU7QUFDakUsMkRBQTRFO0FBQzVFLHlDQUFxQztBQUdyQyxnREFBNEM7QUFDNUMsNEJBQXlCO0FBSXpCLE1BQWEsV0FBVztJQUd0QixZQUFZLFFBQWtCO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLGFBQTRCO1FBQzNDLElBQUk7WUFDRixNQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBRTlDLElBQUksV0FBVyxDQUFDLFNBQVMsRUFBRTtnQkFDekIsT0FBTyxJQUFBLGFBQUksRUFBQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBYSxDQUFBO2FBQ3RFO1lBQ0QsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBRW5DLE1BQU0sSUFBSSxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXhDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFNUMsT0FBTyxJQUFBLGNBQUssRUFDVixlQUFNLENBQUMsRUFBRSxDQUFpQjtnQkFDeEIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFO2FBQ1gsQ0FBQyxDQUNILENBQUE7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFBLGFBQUksRUFBQyxLQUFLLENBQWEsQ0FBQTtTQUMvQjtJQUNILENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQVU7UUFDekIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDOUMsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDdEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBQSxhQUFJLEVBQUMsS0FBSyxDQUFhLENBQUE7U0FDL0I7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEdBQVEsRUFBRSxNQUFjO1FBQ2xELElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1lBQy9ELE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBNkIsR0FBRyxDQUFDLENBQUMsQ0FBQTtTQUN6RDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFBLGFBQUksRUFBQyxLQUFLLENBQWEsQ0FBQTtTQUMvQjtJQUNILENBQUM7Q0FHRjtBQWpERCxrQ0FpREMifQ==