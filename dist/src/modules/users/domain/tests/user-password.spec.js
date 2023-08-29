"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../../../lib/common/constants");
const UserPassword_1 = require("../UserPassword");
require("reflect-metadata");
let validPassword;
let invalidPassword;
let hashedPassword;
describe('User Password', () => {
    beforeEach(() => {
        validPassword = 'Power123@';
        invalidPassword = '123Jk';
        hashedPassword = "$2a$10$rk0ncKKARt3uudF0h.zeNOOoPZGm7xacKtPOtsnxYpYbtpZBQ42SG";
    });
    it('should return a hash value of password', () => {
        const userPasswordOrError = UserPassword_1.UserPassword.create({ value: validPassword });
        expect(userPasswordOrError.getValue().getHashedValue()).toHaveLength(constants_1.maxHashedLength);
        expect(userPasswordOrError.isSuccess).toBeTruthy();
    });
    it('should return error for invalid password', () => {
        const userPasswordOrError = UserPassword_1.UserPassword.create({ value: invalidPassword });
        expect(userPasswordOrError.isSuccess).toBeFalsy();
    });
    it('should compare password and hash with boolean result ', () => {
        const userPasswordOrError = UserPassword_1.UserPassword.create({ value: validPassword });
        const userPassword = userPasswordOrError.getValue();
        expect(userPassword.comparePassword(validPassword)).toBeTruthy();
    });
    it('should check if password value is already hashed and return boolean result ', () => {
        expect(UserPassword_1.UserPassword.isAlreadyHashed(hashedPassword)).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXNzd29yZC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3Rlc3RzL3VzZXItcGFzc3dvcmQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdFQUFtRTtBQUNuRSxrREFBOEM7QUFDOUMsNEJBQXlCO0FBRXpCLElBQUksYUFBYSxDQUFDO0FBQ2xCLElBQUksZUFBZSxDQUFDO0FBQ3BCLElBQUksY0FBYyxDQUFDO0FBQ25CLFFBQVEsQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFO0lBRTNCLFVBQVUsQ0FBQyxHQUFFLEVBQUU7UUFDWCxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQzVCLGVBQWUsR0FBRSxPQUFPLENBQUE7UUFDeEIsY0FBYyxHQUFFLDhEQUE4RCxDQUFBO0lBQ2xGLENBQUMsQ0FBQyxDQUFBO0lBRU4sRUFBRSxDQUFDLHdDQUF3QyxFQUFDLEdBQUUsRUFBRTtRQUU1QyxNQUFNLG1CQUFtQixHQUFJLDJCQUFZLENBQUMsTUFBTSxDQUFDLEVBQUMsS0FBSyxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUE7UUFDdkUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLDJCQUFlLENBQUMsQ0FBQTtRQUNyRixNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFdEQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsMENBQTBDLEVBQUMsR0FBRSxFQUFFO1FBQzlDLE1BQU0sbUJBQW1CLEdBQUksMkJBQVksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQTtRQUN6RSxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDckQsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsdURBQXVELEVBQUMsR0FBRSxFQUFFO1FBQzNELE1BQU0sbUJBQW1CLEdBQUksMkJBQVksQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQTtRQUV2RSxNQUFNLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUVuRCxNQUFNLENBQUUsWUFBWSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JFLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLDZFQUE2RSxFQUFDLEdBQUUsRUFBRTtRQUNqRixNQUFNLENBQUMsMkJBQVksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0RSxDQUFDLENBQUMsQ0FBQTtBQUdELENBQUMsQ0FBQyxDQUFBIn0=