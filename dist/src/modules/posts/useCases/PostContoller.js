"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostController = void 0;
const BaseController_1 = require("../../../lib/core/infra/BaseController");
const AppError_1 = require("../../../lib/core/logic/AppError");
const DomainError_1 = require("../../../lib/core/logic/DomainError");
require("reflect-metadata");
class PostController extends BaseController_1.BaseController {
    constructor(postService) {
        super();
        this.postService = postService;
    }
    async createPost() {
        const user = this.req.user;
        if (!user)
            this.unauthorized();
        //confirms if userId matches authenticated userId
        if ((user === null || user === void 0 ? void 0 : user.id) != this.req.params.id) {
            this.conflict("Authenticated user is different from userId in params");
        }
        const dto = this.req.body;
        dto.userId = user.id;
        try {
            const result = await this.postService.createPost(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    case DomainError_1.DomainError:
                        return this.clientError(error.errorValue().message);
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
    async getUserPaginatedPosts() {
        try {
            const dto = this.req.query;
            const user = this.req.user;
            //confirms if userId matches authenticated userId
            if ((user === null || user === void 0 ? void 0 : user.id) != this.req.params.id) {
                this.conflict("Authenticated user is different from userId in params");
            }
            const result = await this.postService.getUserPaginatedPosts(dto, user.id);
            const resultVal = result.value;
            return this.ok(this.res, resultVal.getValue());
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.PostController = PostController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdENvbnRvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3RzL3VzZUNhc2VzL1Bvc3RDb250b2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkVBQXVFO0FBRXZFLCtEQUFrRTtBQUNsRSxxRUFBaUU7QUFDakUsNEJBQXlCO0FBRXpCLE1BQWEsY0FBZSxTQUFRLCtCQUFjO0lBR2hELFlBQVksV0FBd0I7UUFDbEMsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVU7UUFDZCxNQUFNLElBQUksR0FBUSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQTtRQUUvQixJQUFJLENBQUMsSUFBSTtZQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUU5QixpREFBaUQ7UUFDakQsSUFBSSxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxFQUFFLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsdURBQXVELENBQUMsQ0FBQTtTQUN2RTtRQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO1FBQ3pCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQTtRQUVwQixJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLHlCQUFXO3dCQUNkLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ3JEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQy9DO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7YUFDL0M7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxxQkFBcUI7UUFDekIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFBO1lBQzFCLE1BQU0sSUFBSSxHQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBO1lBRS9CLGlEQUFpRDtZQUNqRCxJQUFJLENBQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEVBQUUsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsdURBQXVELENBQUMsQ0FBQTthQUN2RTtZQUNELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3pFLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDOUIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDL0M7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDZjtJQUNILENBQUM7Q0FDRjtBQTNERCx3Q0EyREMifQ==