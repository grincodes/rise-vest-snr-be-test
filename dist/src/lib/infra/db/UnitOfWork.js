"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfWork = void 0;
const DatabaseModule_1 = require("./DatabaseModule");
class UnitOfWork {
    async startTransaction(level) {
        level
            ? await DatabaseModule_1.writeConnection.startTransaction(level)
            : await DatabaseModule_1.writeConnection.startTransaction();
    }
    async commitTransaction() {
        await DatabaseModule_1.writeConnection.commitTransaction();
    }
    async rollbackTransaction() {
        await DatabaseModule_1.writeConnection.rollbackTransaction();
    }
    //provided all the transactions are write we dont need this
    //   public getRepository<T>(target: EntityTarget<T>): Repository<T> {
    //     return this.dataSource.manager.getRepository(target);
    //   }
    async complete(work) {
        try {
            await work();
            await this.commitTransaction();
        }
        catch (error) {
            await this.rollbackTransaction();
            throw error;
        }
        finally {
            await DatabaseModule_1.writeConnection.release();
        }
    }
}
exports.UnitOfWork = UnitOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pdE9mV29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaW5mcmEvZGIvVW5pdE9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBbUQ7QUFFbkQsTUFBYSxVQUFVO0lBQ2QsS0FBSyxDQUFDLGdCQUFnQixDQUMzQixLQUlrQjtRQUVsQixLQUFLO1lBQ0gsQ0FBQyxDQUFDLE1BQU0sZ0NBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDL0MsQ0FBQyxDQUFDLE1BQU0sZ0NBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTSxLQUFLLENBQUMsaUJBQWlCO1FBQzVCLE1BQU0sZ0NBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFTSxLQUFLLENBQUMsbUJBQW1CO1FBQzlCLE1BQU0sZ0NBQWUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCwyREFBMkQ7SUFDM0Qsc0VBQXNFO0lBQ3RFLDREQUE0RDtJQUM1RCxNQUFNO0lBRU4sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFnQjtRQUM3QixJQUFJO1lBQ0YsTUFBTSxJQUFJLEVBQUUsQ0FBQztZQUNiLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDaEM7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDakMsTUFBTSxLQUFLLENBQUM7U0FDYjtnQkFBUztZQUNSLE1BQU0sZ0NBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRjtBQXJDRCxnQ0FxQ0MifQ==