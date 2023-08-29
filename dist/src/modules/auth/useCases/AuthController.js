"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const BaseController_1 = require("../../../lib/core/infra/BaseController");
class AuthController extends BaseController_1.BaseController {
    constructor(authService) {
        super();
        this.authService = authService;
    }
    async profile() {
        return this.ok(this.res, this.req.user);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9hdXRoL3VzZUNhc2VzL0F1dGhDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF1RTtBQUd2RSxNQUFhLGNBQWUsU0FBUSwrQkFBYztJQUdoRCxZQUFZLFdBQXdCO1FBQ2xDLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUE7SUFDaEMsQ0FBQztJQUlELEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0Y7QUFiRCx3Q0FhQyJ9