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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, {
        message: "password must contain at least 6 Alphanumeric characters with Uppercase and a Special character ",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlVXNlckR0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2R0by9DcmVhdGVVc2VyRHRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFpRjtBQUVqRixNQUFhLGFBQWE7Q0F3QnpCO0FBeEJELHNDQXdCQztBQXJCQztJQUZDLElBQUEsMEJBQVEsR0FBRTtJQUNWLElBQUEsNEJBQVUsR0FBRTs7Z0RBQ0k7QUFJakI7SUFGQyxJQUFBLDBCQUFRLEdBQUU7SUFDVixJQUFBLDRCQUFVLEdBQUU7OytDQUNHO0FBR2hCO0lBREMsSUFBQSx5QkFBTyxHQUFFOzs0Q0FDRztBQWFiO0lBWEMsSUFBQSxrQ0FBZ0IsRUFDZjtRQUNFLFNBQVMsRUFBRSxDQUFDO1FBQ1osWUFBWSxFQUFFLENBQUM7UUFDZixVQUFVLEVBQUUsQ0FBQztRQUNiLFVBQVUsRUFBRSxDQUFDO0tBQ2QsRUFDRDtRQUNFLE9BQU8sRUFBRSxrR0FBa0c7S0FDNUcsQ0FDRjs7K0NBQ2UifQ==