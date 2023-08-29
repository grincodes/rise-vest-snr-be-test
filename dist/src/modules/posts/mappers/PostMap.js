"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMap = void 0;
const UniqueEntityID_1 = require("../../../lib/core/domain/UniqueEntityID");
const Post_1 = require("../domain/Post");
class PostMap {
    static toPersistence(post) {
        return {
            id: post.id.toString(),
            title: post.title,
            body: post.body,
            userId: post.userId,
        };
    }
    static toDomain(raw) {
        const postOrError = Post_1.Post.create({
            title: raw.title,
            body: raw.body,
            userId: raw.userId,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        postOrError.isFailure ? console.log(postOrError.error) : "";
        return postOrError.isSuccess ? postOrError.getValue() : null;
    }
}
exports.PostMap = PostMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3RzL21hcHBlcnMvUG9zdE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0RUFBd0U7QUFDeEUseUNBQXFDO0FBR3JDLE1BQWEsT0FBTztJQUNYLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBVTtRQUNwQyxPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsTUFBTSxXQUFXLEdBQUcsV0FBSSxDQUFDLE1BQU0sQ0FDN0I7WUFDRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1NBQ25CLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FDM0IsQ0FBQTtRQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFFM0QsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtJQUM5RCxDQUFDO0NBQ0Y7QUF4QkQsMEJBd0JDIn0=