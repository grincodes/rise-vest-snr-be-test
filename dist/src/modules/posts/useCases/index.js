"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = exports.postService = void 0;
const repo_1 = require("../infra/repo");
const PostContoller_1 = require("./PostContoller");
const PostService_1 = require("./PostService");
const postService = new PostService_1.PostService(repo_1.postRepo);
exports.postService = postService;
const postController = new PostContoller_1.PostController(postService);
exports.postController = postController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wb3N0cy91c2VDYXNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBd0M7QUFDeEMsbURBQWdEO0FBQ2hELCtDQUEyQztBQUUzQyxNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUMsZUFBUSxDQUFDLENBQUE7QUFHcEMsa0NBQVc7QUFGcEIsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRWhDLHdDQUFjIn0=