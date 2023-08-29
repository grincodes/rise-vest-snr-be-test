"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = exports.userService = void 0;
const repo_1 = require("../infra/repo");
const UserContoller_1 = require("./UserContoller");
const UserService_1 = require("./UserService");
const userService = new UserService_1.UserService(repo_1.userRepo);
exports.userService = userService;
const userController = new UserContoller_1.UserController(userService);
exports.userController = userController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBd0M7QUFDeEMsbURBQWdEO0FBQ2hELCtDQUEyQztBQUUzQyxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsZUFBUSxDQUFDLENBQUE7QUFHcEMsa0NBQVc7QUFGcEIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRWhDLHdDQUFjIn0=