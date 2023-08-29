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
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
const BaseEntity_1 = require("../../../../lib/infra/db/BaseEntity");
const PostEntity_model_1 = require("../../../posts/infra/entity/PostEntity.model");
const UserEntity_model_1 = require("../../../users/infra/entity/UserEntity.model");
let Comments = class Comments extends BaseEntity_1.BaseEntity {
};
exports.Comments = Comments;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Comments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comments.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comments.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comments.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PostEntity_model_1.Posts, (post) => post.comment),
    (0, typeorm_1.JoinColumn)({ name: "postId" }),
    __metadata("design:type", PostEntity_model_1.Posts)
], Comments.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserEntity_model_1.Users, (user) => user.comments),
    (0, typeorm_1.JoinColumn)({ name: "userId" }),
    __metadata("design:type", UserEntity_model_1.Users)
], Comments.prototype, "user", void 0);
exports.Comments = Comments = __decorate([
    (0, typeorm_1.Entity)()
], Comments);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudEVudGl0eS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2luZnJhL2VudGl0eS9Db21tZW50RW50aXR5Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE4RTtBQUM5RSxvRUFBZ0U7QUFDaEUsbUZBQW9FO0FBQ3BFLG1GQUFvRTtBQUc3RCxJQUFNLFFBQVEsR0FBZCxNQUFNLFFBQVMsU0FBUSx1QkFBVTtDQW9CdkMsQ0FBQTtBQXBCWSw0QkFBUTtBQUVuQjtJQURDLElBQUEsdUJBQWEsR0FBRTs7b0NBQ047QUFHVjtJQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ0s7QUFHZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7d0NBQ0s7QUFHZDtJQURDLElBQUEsZ0JBQU0sR0FBRTs7eUNBQ007QUFJZjtJQUZDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQzlDLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs4QkFDeEIsd0JBQUs7c0NBQUE7QUFJWjtJQUZDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBSyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQy9DLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs4QkFDeEIsd0JBQUs7c0NBQUE7bUJBbkJELFFBQVE7SUFEcEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksUUFBUSxDQW9CcEIifQ==