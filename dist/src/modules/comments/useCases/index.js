"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentController = exports.commentService = void 0;
const repo_1 = require("../../posts/infra/repo");
const repo_2 = require("../infra/repo");
const CommentController_1 = require("./CommentController");
const CommentService_1 = require("./CommentService");
const commentService = new CommentService_1.CommentService(repo_2.commentRepo, repo_1.postRepo);
exports.commentService = commentService;
const commentController = new CommentController_1.CommentController(commentService);
exports.commentController = commentController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21tZW50cy91c2VDYXNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsd0NBQTJDO0FBQzNDLDJEQUF1RDtBQUN2RCxxREFBaUQ7QUFFakQsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLGtCQUFXLEVBQUUsZUFBUSxDQUFDLENBQUE7QUFHdkQsd0NBQWM7QUFGdkIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRXRDLDhDQUFpQiJ9