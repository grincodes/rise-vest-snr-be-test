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
exports.BaseEntity = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
let BaseEntity = class BaseEntity {
};
exports.BaseEntity = BaseEntity;
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], BaseEntity.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], BaseEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.VersionColumn)({ default: 0 }),
    __metadata("design:type", Number)
], BaseEntity.prototype, "version", void 0);
exports.BaseEntity = BaseEntity = __decorate([
    (0, typeorm_1.Entity)()
], BaseEntity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaW5mcmEvZGIvQmFzZUVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBNEM7QUFDNUMscUNBS2lCO0FBR1YsSUFBTSxVQUFVLEdBQWhCLE1BQU0sVUFBVTtDQVl0QixDQUFBO0FBWlksZ0NBQVU7QUFHckI7SUFGQyxJQUFBLDJCQUFPLEdBQUU7SUFDVCxJQUFBLDBCQUFnQixHQUFFOzhCQUNQLElBQUk7NkNBQUM7QUFJakI7SUFGQyxJQUFBLDJCQUFPLEdBQUU7SUFDVCxJQUFBLDBCQUFnQixHQUFFOzhCQUNQLElBQUk7NkNBQUM7QUFJakI7SUFGQyxJQUFBLDJCQUFPLEdBQUU7SUFDVCxJQUFBLHVCQUFhLEVBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7OzJDQUNiO3FCQVhOLFVBQVU7SUFEdEIsSUFBQSxnQkFBTSxHQUFFO0dBQ0ksVUFBVSxDQVl0QiJ9