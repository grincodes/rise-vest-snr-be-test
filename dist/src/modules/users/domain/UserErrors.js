"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserErrors = void 0;
const Result_1 = require("../../../lib/core/logic/Result");
var UserErrors;
(function (UserErrors) {
    class AccountAlreadyExists extends Result_1.Result {
        constructor(email) {
            super(false, {
                message: `The email ${email} associated for this account already exists`,
            });
        }
        static create(email) {
            return new AccountAlreadyExists(email);
        }
    }
    UserErrors.AccountAlreadyExists = AccountAlreadyExists;
    class InvalidCredentials extends Result_1.Result {
        constructor() {
            super(false, {
                message: `Credentials are not valid.`,
            });
        }
        static create() {
            return new InvalidCredentials();
        }
    }
    UserErrors.InvalidCredentials = InvalidCredentials;
})(UserErrors || (exports.UserErrors = UserErrors = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckVycm9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL2RvbWFpbi9Vc2VyRXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUF1RDtBQUd2RCxJQUFpQixVQUFVLENBd0IxQjtBQXhCRCxXQUFpQixVQUFVO0lBQ3pCLE1BQWEsb0JBQXFCLFNBQVEsZUFBb0I7UUFDNUQsWUFBWSxLQUFhO1lBQ3ZCLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLGFBQWEsS0FBSyw2Q0FBNkM7YUFDekQsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQWE7WUFDaEMsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3hDLENBQUM7S0FDRjtJQVZZLCtCQUFvQix1QkFVaEMsQ0FBQTtJQUVELE1BQWEsa0JBQW1CLFNBQVEsZUFBb0I7UUFDMUQ7WUFDRSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNYLE9BQU8sRUFBRSw0QkFBNEI7YUFDdEIsQ0FBQyxDQUFBO1FBQ3BCLENBQUM7UUFFTSxNQUFNLENBQUMsTUFBTTtZQUNsQixPQUFPLElBQUksa0JBQWtCLEVBQUUsQ0FBQTtRQUNqQyxDQUFDO0tBQ0Y7SUFWWSw2QkFBa0IscUJBVTlCLENBQUE7QUFDSCxDQUFDLEVBeEJnQixVQUFVLDBCQUFWLFVBQVUsUUF3QjFCIn0=