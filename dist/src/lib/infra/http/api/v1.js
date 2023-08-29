"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1Router = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("../../../../modules/users/infra/http/routes");
const routes_2 = require("../../../../modules/auth/infra/http/routes");
const routes_3 = require("../../../../modules/posts/infra/http/routes");
const v1Router = express_1.default.Router();
exports.v1Router = v1Router;
v1Router.get("/", (req, res) => {
    return res.json({ message: "Yo! we're up" });
});
v1Router.use("/auth", routes_2.authRouter);
v1Router.use("/users", routes_1.userRouter);
v1Router.use("/posts", routes_3.postRouter);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidjEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2h0dHAvYXBpL3YxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE2QjtBQUM3Qix3RUFBd0U7QUFDeEUsdUVBQXVFO0FBQ3ZFLHdFQUF3RTtBQUV4RSxNQUFNLFFBQVEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBVXhCLDRCQUFRO0FBUmpCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsbUJBQVUsQ0FBQyxDQUFBO0FBQ2pDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsQ0FBQTtBQUNsQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLENBQUEifQ==