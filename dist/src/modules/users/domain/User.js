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
exports.User = exports.UserGuard = void 0;
const class_validator_1 = require("class-validator");
const Entity_1 = require("../../../lib/core/domain/Entity");
const Result_1 = require("../../../lib/core/logic/Result");
const Guard_1 = require("../../../lib/core/logic/Guard");
const UserPassword_1 = require("./UserPassword");
class UserGuard {
}
exports.UserGuard = UserGuard;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserGuard.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UserGuard.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UserGuard.prototype, "email", void 0);
class User extends Entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    get id() {
        return this._id.toString();
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
    get firstName() {
        return this.props.firstName;
    }
    get lastName() {
        return this.props.lastName;
    }
    static create(props, id) {
        const userPasswordOrError = UserPassword_1.UserPassword.create({ value: props.password });
        if (userPasswordOrError.isFailure) {
            return Result_1.Result.fail(userPasswordOrError.errorValue());
        }
        props.password = userPasswordOrError.getValue().getHashedValue();
        const guardResult = Guard_1.Guard.validate(UserGuard, props);
        if (guardResult) {
            return Result_1.Result.fail(guardResult.errMsg);
        }
        const user = new User(Object.assign({}, props), id);
        return Result_1.Result.ok(user);
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLHFEQUEwRTtBQUMxRSw0REFBd0Q7QUFFeEQsMkRBQXVEO0FBQ3ZELHlEQUFxRDtBQUNyRCxpREFBNkM7QUFTN0MsTUFBYSxTQUFTO0NBYXJCO0FBYkQsOEJBYUM7QUFUQztJQUhDLElBQUEsMEJBQVEsR0FBRTtJQUNWLElBQUEsNEJBQVUsR0FBRTtJQUNaLElBQUEsMkJBQVMsRUFBQyxDQUFDLENBQUM7OzRDQUNJO0FBS2pCO0lBSEMsSUFBQSwwQkFBUSxHQUFFO0lBQ1YsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwyQkFBUyxFQUFDLENBQUMsQ0FBQzs7MkNBQ0c7QUFHaEI7SUFEQyxJQUFBLHlCQUFPLEdBQUU7O3dDQUNHO0FBR2YsTUFBYSxJQUFLLFNBQVEsZUFBaUI7SUFDekMsWUFBb0IsS0FBZ0IsRUFBRSxFQUFtQjtRQUN2RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBZ0IsRUFBRSxFQUFtQjtRQUN4RCxNQUFNLG1CQUFtQixHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTFFLElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1NBQzNEO1FBRUQsS0FBSyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUVoRSxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVwRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDN0M7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksbUJBRWQsS0FBSyxHQUVWLEVBQUUsQ0FDSCxDQUFBO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFPLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FDRjtBQWpERCxvQkFpREMifQ==