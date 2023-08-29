"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const DomainError_1 = require("../../../lib/core/logic/DomainError");
const Result_1 = require("../../../lib/core/logic/Result");
require("reflect-metadata");
const CommentMap_1 = require("../mappers/CommentMap");
const Comment_1 = require("../domain/Comment");
const PostErrors_1 = require("../../posts/domain/PostErrors");
class CommentService {
    constructor(commentRepo, postRepo) {
        this.commentRepo = commentRepo;
        this.postRepo = postRepo;
    }
    async createComment(createCommentDto) {
        try {
            const postExists = await this.postRepo.postExists(createCommentDto.postId);
            if (!postExists) {
                return (0, Result_1.left)(PostErrors_1.PostErrors.PostDoesNotExist.create());
            }
            const commentOrError = Comment_1.Comment.create(createCommentDto);
            if (commentOrError.isFailure) {
                return (0, Result_1.left)(DomainError_1.DomainError.create(commentOrError.errorValue()));
            }
            const comment = commentOrError.getValue();
            const data = CommentMap_1.CommentMap.toPersistence(comment);
            const res = await this.commentRepo.create(data);
            return (0, Result_1.right)(Result_1.Result.ok({
                id: res.id,
            }));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
}
exports.CommentService = CommentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21tZW50cy91c2VDYXNlcy9Db21tZW50U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxRUFBaUU7QUFDakUsMkRBQTRFO0FBRzVFLDRCQUF5QjtBQUd6QixzREFBa0Q7QUFDbEQsK0NBQTJDO0FBQzNDLDhEQUEwRDtBQUsxRCxNQUFhLGNBQWM7SUFJekIsWUFBWSxXQUFtQyxFQUFFLFFBQWtCO1FBQ2pFLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYSxDQUFDLGdCQUFrQztRQUNwRCxJQUFJO1lBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUUxRSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLE9BQU8sSUFBQSxhQUFJLEVBQUMsdUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBYSxDQUFBO2FBQzlEO1lBRUQsTUFBTSxjQUFjLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUV2RCxJQUFJLGNBQWMsQ0FBQyxTQUFTLEVBQUU7Z0JBQzVCLE9BQU8sSUFBQSxhQUFJLEVBQUMseUJBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQWEsQ0FBQTthQUN6RTtZQUVELE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUV6QyxNQUFNLElBQUksR0FBRyx1QkFBVSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUM5QyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRS9DLE9BQU8sSUFBQSxjQUFLLEVBQ1YsZUFBTSxDQUFDLEVBQUUsQ0FBaUI7Z0JBQ3hCLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRTthQUNYLENBQUMsQ0FDSCxDQUFBO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sSUFBQSxhQUFJLEVBQUMsS0FBSyxDQUFhLENBQUE7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7QUFyQ0Qsd0NBcUNDIn0=