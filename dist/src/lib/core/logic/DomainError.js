"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainError = void 0;
const Result_1 = require("./Result");
class DomainError extends Result_1.Result {
    constructor(msg, err) {
        super(false, {
            message: msg,
            // error: err,
        });
        console.log(`[DomainError]: An unexpected error occurred`);
        console.error(err);
    }
    static create(err) {
        return new DomainError(err);
    }
}
exports.DomainError = DomainError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvcmUvbG9naWMvRG9tYWluRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWlDO0FBR2pDLE1BQWEsV0FBWSxTQUFRLGVBQW9CO0lBQ25ELFlBQW1CLEdBQVcsRUFBRSxHQUFTO1FBQ3ZDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDWCxPQUFPLEVBQUUsR0FBRztZQUNaLGNBQWM7U0FDQyxDQUFDLENBQUE7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO1FBQzFELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBUTtRQUMzQixPQUFPLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FDRjtBQWJELGtDQWFDIn0=