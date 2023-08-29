"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMap = void 0;
const UniqueEntityID_1 = require("../../../lib/core/domain/UniqueEntityID");
const Comment_1 = require("../domain/Comment");
const uuid_1 = require("uuid");
class CommentMap {
    static dtoToPersistence(dto) {
        return {
            id: (0, uuid_1.v4)(),
            postId: dto.postId,
            userId: dto.userId,
            comment: dto.comment,
        };
    }
    static toPersistence(comment) {
        return {
            id: comment.id.toString(),
            userId: comment.userId,
            postId: comment.postId,
            comment: comment.comment,
        };
    }
    static toDomain(raw) {
        const commentOrError = Comment_1.Comment.create({
            userId: raw.userId,
            postId: raw.postId,
            comment: raw.comment,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        commentOrError.isFailure ? console.log(commentOrError.error) : "";
        return commentOrError.isSuccess ? commentOrError.getValue() : null;
    }
}
exports.CommentMap = CommentMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL21hcHBlcnMvQ29tbWVudE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0RUFBd0U7QUFDeEUsK0NBQTJDO0FBRzNDLCtCQUFpQztBQUVqQyxNQUFhLFVBQVU7SUFDZCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBcUI7UUFDbEQsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFBLFNBQUksR0FBRTtZQUNWLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFnQjtRQUMxQyxPQUFPO1lBQ0wsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtZQUN0QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO1NBQ3pCLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sY0FBYyxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUNuQztZQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1NBQ3JCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FDM0IsQ0FBQTtRQUVELGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFFakUsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUNwRSxDQUFDO0NBQ0Y7QUFqQ0QsZ0NBaUNDIn0=