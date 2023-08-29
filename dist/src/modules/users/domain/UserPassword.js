"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPassword = exports.PasswordGuard = void 0;
const ValueObject_1 = require("../../../lib/core/domain/ValueObject");
const Guard_1 = require("../../../lib/core/logic/Guard");
const bcrypt = __importStar(require("bcryptjs"));
const class_validator_1 = require("class-validator");
const Result_1 = require("../../../lib/core/logic/Result");
class PasswordGuard {
}
exports.PasswordGuard = PasswordGuard;
__decorate([
    (0, class_validator_1.IsStrongPassword)({
        minLength: 6,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    __metadata("design:type", String)
], PasswordGuard.prototype, "password", void 0);
class UserPassword extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    /**
     * @method comparePassword
     * @desc Compares as plain-text and hashed password.
     */
    comparePassword(plainTextPassword) {
        let hashed = this.getHashedValue();
        return this.bcryptCompare(plainTextPassword, hashed);
    }
    bcryptCompare(plainText, hashed) {
        const isPasswordValid = bcrypt.compareSync(plainText, hashed);
        return isPasswordValid;
    }
    static isAlreadyHashed(pwd) {
        return pwd.length == UserPassword.hashedLength;
    }
    hashPassword(password) {
        const hash = bcrypt.hashSync(password, 10);
        return hash;
    }
    getHashedValue() {
        if (UserPassword.isAlreadyHashed(this.props.value)) {
            return this.props.value;
        }
        else {
            return this.hashPassword(this.props.value);
        }
    }
    static create(props) {
        // check if password is hashed
        if (UserPassword.isAlreadyHashed(props.value)) {
            return Result_1.Result.ok(new UserPassword({
                value: props.value,
            }));
        }
        const propsResult = Guard_1.Guard.validate(PasswordGuard, { password: props.value });
        if (propsResult) {
            return Result_1.Result.fail(propsResult.errMsg);
        }
        return Result_1.Result.ok(new UserPassword({
            value: props.value,
        }));
    }
}
exports.UserPassword = UserPassword;
UserPassword.hashedLength = 60;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL1VzZXJQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUFrRTtBQUNsRSx5REFBcUQ7QUFDckQsaURBQWtDO0FBQ2xDLHFEQUFrRDtBQUNsRCwyREFBdUQ7QUFNdkQsTUFBYSxhQUFhO0NBUXpCO0FBUkQsc0NBUUM7QUFEQztJQU5DLElBQUEsa0NBQWdCLEVBQUM7UUFDaEIsU0FBUyxFQUFFLENBQUM7UUFDWixZQUFZLEVBQUUsQ0FBQztRQUNmLFVBQVUsRUFBRSxDQUFDO1FBQ2IsVUFBVSxFQUFFLENBQUM7S0FDZCxDQUFDOzsrQ0FDYztBQUdsQixNQUFhLFlBQWEsU0FBUSx5QkFBOEI7SUFFOUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsWUFBb0IsS0FBSztRQUN2QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBRUksZUFBZSxDQUFDLGlCQUF5QjtRQUM5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDbEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFTyxhQUFhLENBQUMsU0FBaUIsRUFBRSxNQUFjO1FBQ3JELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBQzdELE9BQU8sZUFBZSxDQUFBO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsZUFBZSxDQUFDLEdBQVc7UUFDdkMsT0FBTyxHQUFHLENBQUMsTUFBTSxJQUFJLFlBQVksQ0FBQyxZQUFZLENBQUE7SUFDaEQsQ0FBQztJQUVPLFlBQVksQ0FBQyxRQUFnQjtRQUNuQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxQyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFTSxjQUFjO1FBQ25CLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7U0FDeEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQzNDO0lBQ0gsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBd0I7UUFDM0MsOEJBQThCO1FBQzlCLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUNkLElBQUksWUFBWSxDQUFDO2dCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSzthQUNuQixDQUFDLENBQ0gsQ0FBQTtTQUNGO1FBQ0QsTUFBTSxXQUFXLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7UUFFNUUsSUFBSSxXQUFXLEVBQUU7WUFDZixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JEO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUNkLElBQUksWUFBWSxDQUFDO1lBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ25CLENBQUMsQ0FDSCxDQUFBO0lBQ0gsQ0FBQzs7QUE5REgsb0NBK0RDO0FBOURRLHlCQUFZLEdBQUcsRUFBRSxDQUFBIn0=