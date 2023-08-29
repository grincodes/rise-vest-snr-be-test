"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const BaseController_1 = require("../../../lib/core/infra/BaseController");
const AppError_1 = require("../../../lib/core/logic/AppError");
const DomainError_1 = require("../../../lib/core/logic/DomainError");
require("reflect-metadata");
const PostErrors_1 = require("../../posts/domain/PostErrors");
class CommentController extends BaseController_1.BaseController {
    constructor(commentService) {
        super();
        this.commentService = commentService;
    }
    async createComment() {
        const user = this.req.user;
        if (!user) {
            return this.unauthorized();
        }
        try {
            const postId = this.req.params.postId;
            //check if post exists
            const dto = this.req.body;
            dto.userId = user === null || user === void 0 ? void 0 : user.id;
            dto.postId = postId;
            const result = await this.commentService.createComment(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    case DomainError_1.DomainError:
                        return this.clientError(error.errorValue().message);
                    case PostErrors_1.PostErrors.PostDoesNotExist:
                        return this.notFound(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res, resultVal.getValue());
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CommentController = CommentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21tZW50cy91c2VDYXNlcy9Db21tZW50Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyRUFBdUU7QUFDdkUsK0RBQWtFO0FBQ2xFLHFFQUFpRTtBQUNqRSw0QkFBeUI7QUFFekIsOERBQTBEO0FBRTFELE1BQWEsaUJBQWtCLFNBQVEsK0JBQWM7SUFHbkQsWUFBWSxjQUE4QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsYUFBYTtRQUNqQixNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQTtRQUUvQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7U0FDM0I7UUFHRCxJQUFJO1lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO1lBRXJDLHNCQUFzQjtZQUd0QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQTtZQUN6QixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxFQUFFLENBQUE7WUFDckIsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7WUFFcEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUMzRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLHlCQUFXO3dCQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3JELEtBQUssdUJBQVUsQ0FBQyxnQkFBZ0I7d0JBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQy9DO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7YUFDL0M7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBakRELDhDQWlEQyJ9