"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const useCases_1 = require("../../../useCases");
require("reflect-metadata");
const passport_1 = __importDefault(require("passport"));
const http_1 = require("../../../../../lib/infra/http");
const LoginRequestDto_1 = require("../../../dto/LoginRequestDto");
const config_1 = require("../../../../../config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter.post("/login", http_1.middleware.validateDto(LoginRequestDto_1.LoginRequestDto), (req, res, next) => {
    passport_1.default.authenticate("local", { session: false }, (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            // Authentication failed, send a custom error message
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const tokenPayload = {
            userId: user.id,
        };
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + config_1.Config.JWT_EXPIRATION);
        const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.Config.JWT_SECRET, { expiresIn: config_1.Config.JWT_EXPIRATION });
        res.cookie("Authentication", token, {
            httpOnly: true,
            expires,
        });
        res.status(200).json({ token });
    })(req, res, next);
});
//logout
authRouter.post("/logout", (req, res) => {
    req.logout();
});
//profile
authRouter.get("/profile", [http_1.middleware.checkAuthToken, passport_1.default.authenticate("jwt", { session: false })], (req, res) => {
    useCases_1.authController.execute(req, res, () => useCases_1.authController.profile());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL2luZnJhL2h0dHAvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE2QjtBQUM3QixnREFBa0Q7QUFDbEQsNEJBQXlCO0FBQ3pCLHdEQUErQjtBQUMvQix3REFBMEQ7QUFDMUQsa0VBQThEO0FBRTlELGtEQUE4QztBQUM5QyxnRUFBOEI7QUFFOUIsTUFBTSxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQXlDMUIsZ0NBQVU7QUF2Q25CLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGlCQUFVLENBQUMsV0FBVyxDQUFDLGlDQUFlLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDcEYsa0JBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNyRSxJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULHFEQUFxRDtZQUNyRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQTtTQUNoRTtRQUVELE1BQU0sWUFBWSxHQUFpQjtZQUNqQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDaEIsQ0FBQTtRQUVELE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDMUIsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsZUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBRWhFLE1BQU0sS0FBSyxHQUFHLHNCQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxlQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBRTdGLEdBQUcsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFO1lBQ2xDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsT0FBTztTQUNSLENBQUMsQ0FBQTtRQUVGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtJQUNqQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3BCLENBQUMsQ0FBQyxDQUFBO0FBRUYsUUFBUTtBQUNSLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBUSxFQUFFLEdBQUcsRUFBRSxFQUFFO0lBQzNDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNkLENBQUMsQ0FBQyxDQUFBO0FBRUYsU0FBUztBQUNULFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsaUJBQVUsQ0FBQyxjQUFjLEVBQUMsa0JBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQVEsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6SCx5QkFBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLHlCQUFjLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtBQUNsRSxDQUFDLENBQUMsQ0FBQSJ9