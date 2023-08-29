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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvaW5mcmEvaHR0cC91dGlscy9NaWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUE2QztBQUM3Qyx5REFBbUQ7QUFFbkQscURBQWlEO0FBRWpELE1BQWEsVUFBVTtJQUF2QjtRQWVTLG1CQUFjLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxDQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxPQUFPLENBQUMsYUFBYSxDQUFBLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDM0Q7WUFFRCxJQUFJLEVBQUUsQ0FBQTtRQUNSLENBQUMsQ0FBQTtJQU9ILENBQUM7SUEzQlEsV0FBVyxDQUFDLFFBQWE7UUFDOUIsT0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM5QixNQUFNLFdBQVcsR0FBRyxJQUFBLG1DQUFlLEVBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV2RCxNQUFNLEtBQUssR0FBRyxhQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUE7WUFFakQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFBO2FBQy9DO1lBRUQsSUFBSSxFQUFFLENBQUE7UUFDUixDQUFDLENBQUE7SUFDSCxDQUFDO0lBVU8sVUFBVSxDQUFDLE1BQXVCLEVBQUUsT0FBZSxFQUFFLEdBQVE7UUFDbkUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7SUFDN0MsQ0FBQztDQUdGO0FBNUJELGdDQTRCQyJ9