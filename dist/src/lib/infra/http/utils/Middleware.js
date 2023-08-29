"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
// import rateLimit from "express-rate-limit"
const class_transformer_1 = require("class-transformer");
const Guard_1 = require("../../../core/logic/Guard");
class Middleware {
    constructor() {
        this.checkAuthToken = (req, res, next) => {
            if (!(req === null || req === void 0 ? void 0 : req.headers.authorization)) {
                return this.endRequest(401, "no auth token provided", res);
            }
            next();
        };
        // public static createRateLimit(mins: number, maxRequests: number) {
        //   return rateLimit({
        //     windowMs: mins * 60 * 1000,
        //     max: maxRequests,
        //     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        //     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
        //   })
        // }
    }
    validateDto(dtoClass) {
        return async (req, res, next) => {
            const dtoInstance = (0, class_transformer_1.plainToInstance)(dtoClass, req.body);
            const error = Guard_1.Guard.validateAndError(dtoInstance);
            if (error) {
                return this.endRequest(400, error.errMsg, res);
            }
            next();
        };
    }
    endRequest(status, message, res) {
        return res.status(status).send({ message });
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaW5mcmEvaHR0cC91dGlscy9NaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUE2QztBQUM3Qyx5REFBbUQ7QUFFbkQscURBQWlEO0FBRWpELE1BQWEsVUFBVTtJQUF2QjtRQWVTLG1CQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxDQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxPQUFPLENBQUMsYUFBYSxDQUFBLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDM0Q7WUFFRCxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQTtRQU1ELHFFQUFxRTtRQUNyRSx1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLHdCQUF3QjtRQUN4QixvRkFBb0Y7UUFDcEYsbUVBQW1FO1FBQ25FLE9BQU87UUFDUCxJQUFJO0lBQ04sQ0FBQztJQWxDUSxXQUFXLENBQUMsUUFBYTtRQUM5QixPQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQzlCLE1BQU0sV0FBVyxHQUFHLElBQUEsbUNBQWUsRUFBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBRXZELE1BQU0sS0FBSyxHQUFHLGFBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUVqRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDL0M7WUFFRCxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQTtJQUNILENBQUM7SUFVTyxVQUFVLENBQUMsTUFBdUIsRUFBRSxPQUFlLEVBQUUsR0FBUTtRQUNuRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0NBVUY7QUFuQ0QsZ0NBbUNDIn0=