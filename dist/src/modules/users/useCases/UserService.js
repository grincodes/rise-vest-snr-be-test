"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const AppError_1 = require("../../../lib/core/logic/AppError");
const DomainError_1 = require("../../../lib/core/logic/DomainError");
const Result_1 = require("../../../lib/core/logic/Result");
const User_1 = require("../domain/User");
const UserErrors_1 = require("../domain/UserErrors");
const UserPassword_1 = require("../domain/UserPassword");
class UserService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async createUser(createUserDto) {
        try {
            const userExists = await this.userRepo.userExists(createUserDto.email);
            if (userExists) {
                return (0, Result_1.left)(UserErrors_1.UserErrors.AccountAlreadyExists.create(createUserDto.email));
            }
            const userOrError = User_1.User.create(createUserDto);
            if (userOrError.isFailure) {
                return (0, Result_1.left)(DomainError_1.DomainError.create(userOrError.errorValue()));
            }
            const user = userOrError.getValue();
            const res = await this.userRepo.saveUser(user);
            return (0, Result_1.right)(Result_1.Result.ok({
                id: res.id,
            }));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
    async getAllPaginatedUsers(dto) {
        try {
            const res = await this.userRepo.findAllPaginatedUsers(dto);
            return (0, Result_1.right)(Result_1.Result.ok(res));
        }
        catch (error) {
            return (0, Result_1.left)(error);
        }
    }
    async verifyUser(email, password) {
        try {
            const user = await this.userRepo.findByEmail(email);
            if (!user) {
                return null;
            }
            const userPasswordOrError = await UserPassword_1.UserPassword.create({ value: user.password });
            if (userPasswordOrError.isFailure) {
                return null;
            }
            const userPassword = userPasswordOrError.getValue();
            const passwordIsValid = userPassword.comparePassword(password);
            if (!passwordIsValid) {
                return null;
            }
            return user;
        }
        catch (error) {
            if (error.constructor == AppError_1.GenericAppError.NotFoundError) {
                return null;
            }
            throw error;
        }
    }
    async validateUser(id) {
        try {
            const user = await this.userRepo.findByUserId(id);
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9Vc2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwrREFBa0U7QUFDbEUscUVBQWlFO0FBQ2pFLDJEQUE0RTtBQUM1RSx5Q0FBcUM7QUFDckMscURBQWlEO0FBQ2pELHlEQUFxRDtBQVNyRCxNQUFhLFdBQVc7SUFHdEIsWUFBWSxRQUFrQjtRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxhQUE0QjtRQUMzQyxJQUFJO1lBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFdEUsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsT0FBTyxJQUFBLGFBQUksRUFBQyx1QkFBVSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQTthQUNyRjtZQUVELE1BQU0sV0FBVyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7WUFFOUMsSUFBSSxXQUFXLENBQUMsU0FBUyxFQUFFO2dCQUN6QixPQUFPLElBQUEsYUFBSSxFQUFDLHlCQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFhLENBQUE7YUFDdEU7WUFFRCxNQUFNLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUE7WUFFbkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUU5QyxPQUFPLElBQUEsY0FBSyxFQUNWLGVBQU0sQ0FBQyxFQUFFLENBQWlCO2dCQUN4QixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUU7YUFDWCxDQUFDLENBQ0gsQ0FBQTtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUEsYUFBSSxFQUFDLEtBQUssQ0FBYSxDQUFBO1NBQy9CO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxHQUFRO1FBQ2pDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFMUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUF5QixHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3JEO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUEsYUFBSSxFQUFDLEtBQUssQ0FBYSxDQUFBO1NBQy9CO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQzlDLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBRW5ELElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUVELE1BQU0sbUJBQW1CLEdBQUcsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtZQUUvRSxJQUFJLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUNELE1BQU0sWUFBWSxHQUFHLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFBO1lBRW5ELE1BQU0sZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7WUFFOUQsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUVELE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSwwQkFBZSxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsT0FBTyxJQUFJLENBQUE7YUFDWjtZQUNELE1BQU0sS0FBSyxDQUFBO1NBQ1o7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFVO1FBQzNCLElBQUk7WUFDRixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ2pELE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sS0FBSyxDQUFBO1NBQ1o7SUFDSCxDQUFDO0NBQ0Y7QUFuRkQsa0NBbUZDIn0=