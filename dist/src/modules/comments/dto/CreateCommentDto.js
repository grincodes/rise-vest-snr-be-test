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
exports.CreateCommentDto = void 0;
const class_validator_1 = require("class-validator");
class CreateCommentDto {
}
exports.CreateCommentDto = CreateCommentDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "comment", void 0);
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "postId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], CreateCommentDto.prototype, "userId", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQ29tbWVudER0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1lbnRzL2R0by9DcmVhdGVDb21tZW50RHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUF5RTtBQUV6RSxNQUFhLGdCQUFnQjtDQVc1QjtBQVhELDRDQVdDO0FBUEM7SUFIQyxJQUFBLDBCQUFRLEdBQUU7SUFDVixJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLDJCQUFTLEVBQUMsQ0FBQyxDQUFDOztpREFDRTtBQUdmO0lBREMsSUFBQSx3QkFBTSxFQUFDLEdBQUcsQ0FBQzs7Z0RBQ0U7QUFHZDtJQURDLElBQUEsd0JBQU0sRUFBQyxHQUFHLENBQUM7O2dEQUNFIn0=