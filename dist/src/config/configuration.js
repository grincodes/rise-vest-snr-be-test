"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const class_validator_1 = require("class-validator");
const dotenv = require("dotenv");
dotenv.config();
class Configuration {
    constructor() {
        this.DATABASE_LOGGING = process.env.DATABASE_LOGGING === "true";
        this.DATABASE_HOST = process.env.DATABASE_HOST;
        this.DATABASE_PORT = Number(process.env.DATABASE_PORT);
        this.DATABASE_NAME = process.env.DATABASE_NAME;
        this.DATABASE_USER = process.env.DATABASE_USER;
        this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
        this.SLACK_TOKEN = process.env.DATABASE_PASSWORD;
        this.JWT_SECRET = process.env.JWT_SECRET;
        this.JWT_EXPIRATION = +process.env.JWT_EXPIRATION;
        this.DATABASE_SYNC = process.env.DATABASE_SYNC === "true";
        this.PORT = Number(process.env.PORT);
        this.isProduction = process.env.IS_PRODUCTION === "true";
        this.isStaginig = process.env.IS_STAGING === "true";
        const error = (0, class_validator_1.validateSync)(this);
        if (!error.length)
            return;
        console.error(`Config validation error: ${JSON.stringify(error)}`);
        process.exit(1);
    }
}
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_LOGGING", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_HOST", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_PORT", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_NAME", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_USER", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_PASSWORD", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "SLACK_TOKEN", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], Configuration.prototype, "JWT_SECRET", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Object)
], Configuration.prototype, "JWT_EXPIRATION", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Object)
], Configuration.prototype, "DATABASE_SYNC", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Object)
], Configuration.prototype, "PORT", void 0);
exports.Config = new Configuration();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Y7QUFFcEYsaUNBQWlDO0FBQ2pDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUVmLE1BQU0sYUFBYTtJQXFDakI7UUFuQ1MscUJBQWdCLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsS0FBSyxNQUFNLENBQUE7UUFHMUQsa0JBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQXVCLENBQUE7UUFHbkQsa0JBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUdqRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBdUIsQ0FBQTtRQUduRCxrQkFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBdUIsQ0FBQTtRQUduRCxzQkFBaUIsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUEyQixDQUFBO1FBRzNELGdCQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBMkIsQ0FBQTtRQUdyRCxlQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUE7UUFHbkMsbUJBQWMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFBO1FBRzVDLGtCQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEtBQUssTUFBTSxDQUFBO1FBR3BELFNBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV4QyxpQkFBWSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxLQUFLLE1BQU0sQ0FBQTtRQUNuRCxlQUFVLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEtBQUssTUFBTSxDQUFBO1FBRzVDLE1BQU0sS0FBSyxHQUFHLElBQUEsOEJBQVksRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFBRSxPQUFNO1FBQ3pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNEJBQTRCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ2xFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakIsQ0FBQztDQUNGO0FBekNVO0lBRFIsSUFBQSwyQkFBUyxHQUFFOzt1REFDdUQ7QUFHMUQ7SUFEUixJQUFBLDBCQUFRLEdBQUU7O29EQUNpRDtBQUduRDtJQURSLElBQUEsdUJBQUssR0FBRTs7b0RBQ2tEO0FBR2pEO0lBRFIsSUFBQSwwQkFBUSxHQUFFOztvREFDaUQ7QUFHbkQ7SUFEUixJQUFBLDBCQUFRLEdBQUU7O29EQUNpRDtBQUduRDtJQURSLElBQUEsMEJBQVEsR0FBRTs7d0RBQ3lEO0FBRzNEO0lBRFIsSUFBQSwwQkFBUSxHQUFFOztrREFDbUQ7QUFHckQ7SUFEUixJQUFBLDBCQUFRLEdBQUU7O2lEQUNpQztBQUduQztJQURSLElBQUEsMEJBQVEsR0FBRTs7cURBQzBDO0FBRzVDO0lBRFIsSUFBQSwyQkFBUyxHQUFFOztvREFDaUQ7QUFHcEQ7SUFEUixJQUFBLHVCQUFLLEdBQUU7OzJDQUNnQztBQWE3QixRQUFBLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFBIn0=