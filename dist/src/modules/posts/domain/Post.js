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
exports.Post = exports.PostGuard = void 0;
const AggregateRoot_1 = require("../../../lib/core/domain/AggregateRoot");
const Result_1 = require("../../../lib/core/logic/Result");
const Guard_1 = require("../../../lib/core/logic/Guard");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class PostGuard {
}
exports.PostGuard = PostGuard;
__decorate([
    (0, class_validator_1.IsUUID)("4"),
    __metadata("design:type", String)
], PostGuard.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], PostGuard.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], PostGuard.prototype, "body", void 0);
class Post extends AggregateRoot_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
    }
    get postId() {
        return this.id.toString();
    }
    get userId() {
        return this.props.userId;
    }
    get title() {
        return this.props.title;
    }
    get body() {
        return this.props.body;
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.validate(PostGuard, props);
        if (guardResult) {
            return Result_1.Result.fail(guardResult.errMsg);
        }
        const post = new Post(Object.assign({}, props), id);
        return Result_1.Result.ok(post);
    }
}
exports.Post = Post;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Bvc3RzL2RvbWFpbi9Qb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDBFQUFzRTtBQUV0RSwyREFBdUQ7QUFDdkQseURBQXFEO0FBQ3JELDRCQUF5QjtBQUN6QixxREFBeUU7QUFRekUsTUFBYSxTQUFTO0NBYXJCO0FBYkQsOEJBYUM7QUFYQztJQURDLElBQUEsd0JBQU0sRUFBQyxHQUFHLENBQUM7O3lDQUNFO0FBS2Q7SUFIQyxJQUFBLDBCQUFRLEdBQUU7SUFDVixJQUFBLDRCQUFVLEdBQUU7SUFDWixJQUFBLDJCQUFTLEVBQUMsQ0FBQyxDQUFDOzt3Q0FDQTtBQUtiO0lBSEMsSUFBQSwwQkFBUSxHQUFFO0lBQ1YsSUFBQSw0QkFBVSxHQUFFO0lBQ1osSUFBQSwyQkFBUyxFQUFDLENBQUMsQ0FBQzs7dUNBQ0Q7QUFHZCxNQUFhLElBQUssU0FBUSw2QkFBd0I7SUFDaEQsWUFBb0IsS0FBZ0IsRUFBRSxFQUFtQjtRQUN2RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBZ0IsRUFBRSxFQUFtQjtRQUN4RCxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUVwRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDN0M7UUFFRCxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksbUJBRWQsS0FBSyxHQUVWLEVBQUUsQ0FDSCxDQUFBO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFPLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FDRjtBQXJDRCxvQkFxQ0MifQ==