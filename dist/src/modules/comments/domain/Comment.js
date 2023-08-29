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
exports.Comment = exports.CommentGuard = void 0;
const Result_1 = require("../../../lib/core/logic/Result");
const Guard_1 = require("../../../lib/core/logic/Guard");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
const Entity_1 = require("../../../lib/core/domain/Entity");
class CommentGuard {
}
exports.CommentGuard = CommentGuard;
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], CommentGuard.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], CommentGuard.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CommentGuard.prototype, "comment", void 0);
class Comment extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    get id() {
        return this._id.toString();
    }
    get userId() {
        return this.props.userId;
    }
    get postId() {
        return this.props.postId;
    }
    get comment() {
        return this.props.comment;
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.validate(CommentGuard, props);
        if (guardResult) {
            return Result_1.Result.fail(guardResult.errMsg);
        }
        const comment = new Comment(Object.assign({}, props), id);
        return Result_1.Result.ok(comment);
    }
}
exports.Comment = Comment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2RvbWFpbi9Db21tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLDJEQUF1RDtBQUN2RCx5REFBcUQ7QUFDckQsNEJBQXlCO0FBQ3pCLHFEQUF5RTtBQUN6RSw0REFBd0Q7QUFReEQsTUFBYSxZQUFZO0NBV3hCO0FBWEQsb0NBV0M7QUFUQztJQURDLElBQUEsd0JBQU0sRUFBQyxHQUFHLENBQUM7OzRDQUNFO0FBR2Q7SUFEQyxJQUFBLHdCQUFNLEVBQUMsR0FBRyxDQUFDOzs0Q0FDRTtBQUtkO0lBSEMsSUFBQSwwQkFBUSxHQUFFO0lBQ1YsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwyQkFBUyxFQUFDLENBQUMsQ0FBQzs7NkNBQ0U7QUFHakIsTUFBYSxPQUFRLFNBQVEsZUFBb0I7SUFDL0MsWUFBb0IsS0FBbUIsRUFBRSxFQUFtQjtRQUMxRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUE7SUFDM0IsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBbUIsRUFBRSxFQUFtQjtRQUMzRCxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUV2RCxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDaEQ7UUFFRCxNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sbUJBRXBCLEtBQUssR0FFVixFQUFFLENBQ0gsQ0FBQTtRQUVELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBVSxPQUFPLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0Y7QUFyQ0QsMEJBcUNDIn0=