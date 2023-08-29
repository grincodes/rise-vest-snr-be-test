"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMap = void 0;
const UniqueEntityID_1 = require("../../../lib/core/domain/UniqueEntityID");
const UserPassword_1 = require("../domain/UserPassword");
const User_1 = require("../domain/User");
class UserMap {
    static toPersistence(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
        };
    }
    static toDomain(raw) {
        const userPasswordOrError = UserPassword_1.UserPassword.create(raw.password);
        const userOrError = User_1.User.create({
            firstName: raw.firstName,
            lastName: raw.lastName,
            email: raw.email,
            password: raw.password,
        }, new UniqueEntityID_1.UniqueEntityID(raw.id));
        userOrError.isFailure ? console.log(userOrError.error) : "";
        return userOrError.isSuccess ? userOrError.getValue() : null;
    }
}
exports.UserMap = UserMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL21hcHBlcnMvVXNlck1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0RUFBd0U7QUFDeEUseURBQXFEO0FBQ3JELHlDQUFxQztBQUdyQyxNQUFhLE9BQU87SUFDWCxNQUFNLENBQUMsYUFBYSxDQUFDLElBQVU7UUFDcEMsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFBO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBUTtRQUM3QixNQUFNLG1CQUFtQixHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3RCxNQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUM3QjtZQUNFLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUztZQUN4QixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7WUFDdEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUTtTQUN2QixFQUNELElBQUksK0JBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQzNCLENBQUE7UUFFRCxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1FBRTNELE9BQU8sV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDOUQsQ0FBQztDQUNGO0FBM0JELDBCQTJCQyJ9