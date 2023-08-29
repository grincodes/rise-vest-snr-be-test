"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericAppError = void 0;
const Result_1 = require("./Result");
var GenericAppError;
(function (GenericAppError) {
    class UnexpectedError extends Result_1.Result {
        constructor(err) {
            super(false, {
                message: `An unexpected error occurred.`,
                error: err,
            });
            console.log(`[AppError]: An unexpected error occurred`);
            console.error(err);
        }
        static create(err) {
            return new UnexpectedError(err);
        }
    }
    GenericAppError.UnexpectedError = UnexpectedError;
    class NotFoundError extends Result_1.Result {
        constructor(msg, err) {
            super(false, {
                message: msg,
                error: err,
            });
            console.log(`[AppError]: An unexpected error occurred`);
            console.error(err);
        }
        static create(msg) {
            return new NotFoundError(msg);
        }
    }
    GenericAppError.NotFoundError = NotFoundError;
})(GenericAppError || (exports.GenericAppError = GenericAppError = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvbG9naWMvQXBwRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlDO0FBR2pDLElBQWlCLGVBQWUsQ0E4Qi9CO0FBOUJELFdBQWlCLGVBQWU7SUFDOUIsTUFBYSxlQUFnQixTQUFRLGVBQW9CO1FBQ3ZELFlBQW1CLEdBQVE7WUFDekIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsR0FBRzthQUNLLENBQUMsQ0FBQTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUE7WUFDdkQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixDQUFDO1FBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRO1lBQzNCLE9BQU8sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDakMsQ0FBQztLQUNGO0lBYlksK0JBQWUsa0JBYTNCLENBQUE7SUFFRCxNQUFhLGFBQWMsU0FBUSxlQUFvQjtRQUNyRCxZQUFtQixHQUFXLEVBQUUsR0FBUztZQUN2QyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxHQUFHO2dCQUNaLEtBQUssRUFBRSxHQUFHO2FBQ0ssQ0FBQyxDQUFBO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQTtZQUN2RCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVc7WUFDOUIsT0FBTyxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQixDQUFDO0tBQ0Y7SUFiWSw2QkFBYSxnQkFhekIsQ0FBQTtBQUNILENBQUMsRUE5QmdCLGVBQWUsK0JBQWYsZUFBZSxRQThCL0IifQ==