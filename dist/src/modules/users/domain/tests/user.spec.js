"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../User");
require("reflect-metadata");
let validUserProps;
let invalidUserProps;
describe('User', () => {
    beforeEach(() => {
        validUserProps = {
            firstName: "shola",
            lastName: "jide",
            password: "Power123@",
            email: "shola.jide@gmail.com",
        };
        invalidUserProps = {
            firstName: "ade",
            lastName: "ok",
            password: "12345",
            email: "ade.ok@gmail.com",
        };
    });
    describe('createUser', () => {
        it('should create user', () => {
            const userOrError = User_1.User.create(validUserProps);
            console.log(userOrError.errorValue());
            expect(userOrError.isSuccess).toBeTruthy();
        });
    });
    describe('validateUser', () => {
        it('should return an error result when provided invalid props', () => {
            const userOrError = User_1.User.create(invalidUserProps);
            expect(userOrError.isSuccess).toBeFalsy();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3Rlc3RzL3VzZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtDQUEwQztBQUUxQyw0QkFBMEI7QUFHMUIsSUFBSSxjQUF5QixDQUFDO0FBQzlCLElBQUksZ0JBQTJCLENBQUM7QUFFaEMsUUFBUSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7SUFFbEIsVUFBVSxDQUFDLEdBQUUsRUFBRTtRQUNYLGNBQWMsR0FBRztZQUNiLFNBQVMsRUFBQyxPQUFPO1lBQ2pCLFFBQVEsRUFBQyxNQUFNO1lBQ2YsUUFBUSxFQUFFLFdBQVc7WUFDckIsS0FBSyxFQUFDLHNCQUFzQjtTQUUvQixDQUFBO1FBRUQsZ0JBQWdCLEdBQUc7WUFDZixTQUFTLEVBQUMsS0FBSztZQUNmLFFBQVEsRUFBQyxJQUFJO1lBQ2IsUUFBUSxFQUFDLE9BQU87WUFDaEIsS0FBSyxFQUFDLGtCQUFrQjtTQUUzQixDQUFBO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFHRixRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtRQUV4QixFQUFFLENBQUMsb0JBQW9CLEVBQUMsR0FBRSxFQUFFO1lBQ3BCLE1BQU0sV0FBVyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUE7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2xELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsY0FBYyxFQUFDLEdBQUUsRUFBRTtRQUN4QixFQUFFLENBQUMsMkRBQTJELEVBQUMsR0FBRSxFQUFFO1lBQy9ELE1BQU0sV0FBVyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtZQUNqRCxNQUFNLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzdDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFHTCxDQUFDLENBQUMsQ0FBQSJ9