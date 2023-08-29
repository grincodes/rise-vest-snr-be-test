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
exports.Posts = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../../../lib/infra/db/BaseEntity");
const UserEntity_model_1 = require("../../../users/infra/entity/UserEntity.model");
const CommentEntity_model_1 = require("../../../comments/infra/entity/CommentEntity.model");
let Posts = class Posts extends BaseEntity_1.BaseEntity {
};
exports.Posts = Posts;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Posts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_model_1.Users, (user) => user.posts),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", UserEntity_model_1.Users)
], Posts.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CommentEntity_model_1.Comments, (comment) => comment.post, { cascade: true }),
    __metadata("design:type", Array)
], Posts.prototype, "comment", void 0);
exports.Posts = Posts = __decorate([
    (0, typeorm_1.Entity)()
], Posts);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdEVudGl0eS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3RzL2luZnJhL2VudGl0eS9Qb3N0RW50aXR5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUF5RjtBQUN6RixvRUFBZ0U7QUFDaEUsbUZBQW9FO0FBQ3BFLDRGQUE2RTtBQUd0RSxJQUFNLEtBQUssR0FBWCxNQUFNLEtBQU0sU0FBUSx1QkFBVTtDQW1CcEMsQ0FBQTtBQW5CWSxzQkFBSztBQUVoQjtJQURDLElBQUEsdUJBQWEsR0FBRTs7aUNBQ047QUFHVjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7cUNBQ0s7QUFHZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7b0NBQ0k7QUFHYjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7bUNBQ0c7QUFJWjtJQUZDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQzVDLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs4QkFDeEIsd0JBQUs7bUNBQUE7QUFHWjtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDcEQ7Z0JBbEJULEtBQUs7SUFEakIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksS0FBSyxDQW1CakIifQ==