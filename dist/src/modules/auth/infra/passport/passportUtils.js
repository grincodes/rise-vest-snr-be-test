"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtAuth = exports.authUser = void 0;
const useCases_1 = require("../../../users/useCases");
const authUser = async (email, password, done) => {
    try {
        const user = await useCases_1.userService.verifyUser(email, password);
        if (!user) {
            return done(null, false, { message: "invalid credentials" });
        }
        return done(null, user);
    }
    catch (error) {
        return done(error);
    }
};
exports.authUser = authUser;
const jwtAuth = async (jwtPayload, done) => {
    try {
        const user = await useCases_1.userService.validateUser(jwtPayload.id);
        delete user.password;
        if (user) {
            return done(null, user);
        }
        else {
            return done(null, false, { message: "User not found" });
        }
    }
    catch (error) {
        return done(null, false, { message: "User not found" });
    }
};
exports.jwtAuth = jwtAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3BvcnRVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2F1dGgvaW5mcmEvcGFzc3BvcnQvcGFzc3BvcnRVdGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBcUQ7QUFFOUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDdEQsSUFBSTtRQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRTFELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQTtTQUM3RDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUN4QjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDbkI7QUFDSCxDQUFDLENBQUE7QUFaWSxRQUFBLFFBQVEsWUFZcEI7QUFFTSxNQUFNLE9BQU8sR0FBRyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2hELElBQUk7UUFDRixNQUFNLElBQUksR0FBRyxNQUFNLHNCQUFXLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFFcEIsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDeEI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO1NBQ3hEO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFBO0tBQ3hEO0FBQ0gsQ0FBQyxDQUFBO0FBYlksUUFBQSxPQUFPLFdBYW5CIn0=