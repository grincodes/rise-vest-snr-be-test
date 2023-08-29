"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepo = void 0;
const DatabaseModule_1 = require("./DatabaseModule");
const AppError_1 = require("../../core/logic/AppError");
class AbstractRepo {
    constructor(entityTarget) {
        this.entityTarget = entityTarget;
    }
    async create(entity) {
        return DatabaseModule_1.writeConnection.manager.getRepository(this.entityTarget).save(entity);
    }
    async findOne(where, relations) {
        const entity = await DatabaseModule_1.readConnection.getRepository(this.entityTarget).findOne({ where, relations });
        return entity;
    }
    async findOneAndUpdate(where, partialEntity) {
        const updateResult = await DatabaseModule_1.writeConnection.manager.getRepository(this.entityTarget).update(where, partialEntity);
        if (!updateResult.affected) {
            console.warn("Entity not found with where", where);
            throw new AppError_1.GenericAppError.NotFoundError("Entity not found.");
        }
        return this.findOne(where);
    }
    async find(where) {
        return DatabaseModule_1.readConnection.getRepository(this.entityTarget).findBy(where);
    }
    async findOneAndDelete(where) {
        await DatabaseModule_1.writeConnection.manager.getRepository(this.entityTarget).delete(where);
    }
}
exports.AbstractRepo = AbstractRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9pbmZyYS9kYi9BYnN0cmFjdFJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EscURBQWtFO0FBQ2xFLHdEQUEyRDtBQUUzRCxNQUFzQixZQUFZO0lBQ2hDLFlBQTZCLFlBQTZCO1FBQTdCLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtJQUFHLENBQUM7SUFFOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFTO1FBQ3BCLE9BQU8sZ0NBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDOUUsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBMEIsRUFBRSxTQUFtQztRQUMzRSxNQUFNLE1BQU0sR0FBRyxNQUFNLCtCQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQTtRQUVsRyxPQUFPLE1BQU0sQ0FBQTtJQUNmLENBQUM7SUFFRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBMEIsRUFBRSxhQUF3QztRQUN6RixNQUFNLFlBQVksR0FBRyxNQUFNLGdDQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQTtRQUVoSCxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2xELE1BQU0sSUFBSSwwQkFBZSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO1NBQzdEO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQTBCO1FBQ25DLE9BQU8sK0JBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBRUQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQTBCO1FBQy9DLE1BQU0sZ0NBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUUsQ0FBQztDQUNGO0FBL0JELG9DQStCQyJ9