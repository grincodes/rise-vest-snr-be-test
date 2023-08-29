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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../../../lib/infra/db/BaseEntity");
const PostEntity_model_1 = require("../../../posts/infra/entity/PostEntity.model");
const CommentEntity_model_1 = require("../../../comments/infra/entity/CommentEntity.model");
let Users = class Users extends BaseEntity_1.BaseEntity {
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PostEntity_model_1.Posts, (post) => post.user, { cascade: true }),
    __metadata("design:type", Array)
], Users.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CommentEntity_model_1.Comments, (comment) => comment.user, { cascade: true }),
    __metadata("design:type", Array)
], Users.prototype, "comments", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)()
], Users);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVudGl0eS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2luZnJhL2VudGl0eS9Vc2VyRW50aXR5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2RTtBQUM3RSxvRUFBZ0U7QUFDaEUsbUZBQW9FO0FBQ3BFLDRGQUE2RTtBQUd0RSxJQUFNLEtBQUssR0FBWCxNQUFNLEtBQU0sU0FBUSx1QkFBVTtDQXFCcEMsQ0FBQTtBQXJCWSxzQkFBSztBQUVoQjtJQURDLElBQUEsdUJBQWEsR0FBRTs7aUNBQ047QUFHVjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ1E7QUFHakI7SUFEQyxJQUFBLGdCQUFNLEdBQUU7O3VDQUNPO0FBR2hCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDWjtBQUdiO0lBREMsSUFBQSxnQkFBTSxHQUFFOzt1Q0FDTztBQUdoQjtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDaEQ7QUFHZjtJQURDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDOzt1Q0FDbkQ7Z0JBcEJWLEtBQUs7SUFEakIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksS0FBSyxDQXFCakIifQ==