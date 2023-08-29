"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = exports.authService = void 0;
const AuthController_1 = require("./AuthController");
const AuthService_1 = require("./AuthService");
const authService = new AuthService_1.AuthService();
exports.authService = authService;
const authController = new AuthController_1.AuthController(authService);
exports.authController = authController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL3VzZUNhc2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFpRDtBQUNqRCwrQ0FBMkM7QUFFM0MsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUE7QUFHNUIsa0NBQVc7QUFGcEIsTUFBTSxjQUFjLEdBQUcsSUFBSSwrQkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBRWhDLHdDQUFjIn0=