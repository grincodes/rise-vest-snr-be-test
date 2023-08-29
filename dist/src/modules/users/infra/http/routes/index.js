"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateUserDto_1 = require("../../../dto/CreateUserDto");
const useCases_1 = require("../../../useCases");
require("reflect-metadata");
const http_1 = require("../../../../../lib/infra/http");
const useCases_2 = require("../../../../posts/useCases");
const CreatePostReq_1 = require("../../../../posts/dto/CreatePostReq");
const passport_1 = __importDefault(require("passport"));
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
// create user
userRouter.post("/", http_1.middleware.validateDto(CreateUserDto_1.CreateUserDto), (req, res) => {
    useCases_1.userController.execute(req, res, () => useCases_1.userController.createUser());
});
userRouter.get("/", (req, res) => {
    useCases_1.userController.execute(req, res, () => useCases_1.userController.getAllPaginatedUsers());
});
//create post
userRouter.post("/:id/posts", [http_1.middleware.validateDto(CreatePostReq_1.CreatePostReq), http_1.middleware.checkAuthToken, passport_1.default.authenticate("jwt", { session: false })], (req, res) => {
    useCases_2.postController.execute(req, res, () => useCases_2.postController.createPost());
});
userRouter.get("/:id/posts", [http_1.middleware.checkAuthToken, passport_1.default.authenticate("jwt", { session: false })], (req, res) => {
    useCases_2.postController.execute(req, res, () => useCases_2.postController.getUserPaginatedPosts());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9pbmZyYS9odHRwL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBNkI7QUFDN0IsOERBQTBEO0FBQzFELGdEQUFrRDtBQUNsRCw0QkFBeUI7QUFDekIsd0RBQTBEO0FBQzFELHlEQUEyRDtBQUMzRCx1RUFBbUU7QUFDbkUsd0RBQStCO0FBRS9CLE1BQU0sVUFBVSxHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFvQjFCLGdDQUFVO0FBbEJuQixjQUFjO0FBQ2QsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQVUsQ0FBQyxXQUFXLENBQUMsNkJBQWEsQ0FBQyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVFLHlCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQ3JFLENBQUMsQ0FBQyxDQUFBO0FBRUYsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDcEMseUJBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyx5QkFBYyxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQTtBQUMvRSxDQUFDLENBQUMsQ0FBQTtBQUVGLGFBQWE7QUFDYixVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGlCQUFVLENBQUMsV0FBVyxDQUFDLDZCQUFhLENBQUMsRUFBRSxpQkFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQ3BLLHlCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBQ3JFLENBQUMsQ0FBQyxDQUFBO0FBRUYsVUFBVSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxpQkFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzVILHlCQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQWMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLENBQUE7QUFDaEYsQ0FBQyxDQUFDLENBQUEifQ==