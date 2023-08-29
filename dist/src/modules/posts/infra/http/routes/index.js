"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const http_1 = require("../../../../../lib/infra/http");
const CreateCommentReq_1 = require("../../../../comments/dto/CreateCommentReq");
const useCases_1 = require("../../../../comments/useCases");
const passport_1 = __importDefault(require("passport"));
const postRouter = express_1.default.Router();
exports.postRouter = postRouter;
//create comment
postRouter.post("/:postId/comments", [http_1.middleware.validateDto(CreateCommentReq_1.CreateCommentReq), http_1.middleware.checkAuthToken, passport_1.default.authenticate("jwt", { session: false })], (req, res) => {
    useCases_1.commentController.execute(req, res, () => useCases_1.commentController.createComment());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wb3N0cy9pbmZyYS9odHRwL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzREFBNkI7QUFDN0IsNEJBQXlCO0FBQ3pCLHdEQUEwRDtBQUMxRCxnRkFBNEU7QUFDNUUsNERBQWlFO0FBQ2pFLHdEQUErQjtBQUUvQixNQUFNLFVBQVUsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBTzFCLGdDQUFVO0FBTG5CLGdCQUFnQjtBQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsaUJBQVUsQ0FBQyxXQUFXLENBQUMsbUNBQWdCLENBQUMsRUFBRSxpQkFBVSxDQUFDLGNBQWMsRUFBRSxrQkFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzlLLDRCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLDRCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUE7QUFDOUUsQ0FBQyxDQUFDLENBQUEifQ==