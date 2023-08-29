"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const v1_1 = require("./api/v1");
const config_1 = require("../../../config");
const passport_1 = __importDefault(require("passport"));
const db_1 = require("../db");
const passport_local_1 = require("passport-local");
const passportUtils_1 = require("../../../modules/auth/infra/passport/passportUtils");
const passport_jwt_1 = require("passport-jwt");
const passport_jwt_2 = require("passport-jwt");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
exports.app = app;
const origin = {
    origin: config_1.Config.isProduction || config_1.Config.isStaginig ? "https://" : "*",
};
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(origin));
app.use((0, helmet_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(passport_1.default.initialize());
passport_1.default.use(new passport_local_1.Strategy({
    usernameField: "email",
    passwordField: "password",
}, passportUtils_1.authUser));
passport_1.default.use(new passport_jwt_1.Strategy({
    // jwtFromRequest: ExtractJwt.fromExtractors([(request: any) => request?.headers.Authentication || request?.headers.authorization || request?.Authentication]),
    jwtFromRequest: passport_jwt_2.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config_1.Config.JWT_SECRET,
}, passportUtils_1.jwtAuth));
app.get("/", (req, res) => {
    res.send("yo i'm up");
});
app.use("/api/v1", v1_1.v1Router);
// New api versions can go here
// initialize db
db_1.dataService
    .initialize()
    .then(() => {
    console.log("Db💾 connected...");
    app.listen(config_1.Config.PORT || 400, () => {
        console.log(`[App]: Server listening on ${config_1.Config.PORT}`);
    });
})
    .catch((err) => {
    console.log(err.message);
});
process.on("SIGINT", () => {
    db_1.dataService.destroy();
    // Gracefully exit the process
    process.exit(0);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9pbmZyYS9odHRwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFnQztBQUNoQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDZixzREFBNkI7QUFDN0IsOERBQW9DO0FBQ3BDLGdEQUF1QjtBQUN2QixvREFBMkI7QUFDM0IsaUNBQW1DO0FBQ25DLDRDQUF3QztBQUN4Qyx3REFBK0I7QUFDL0IsOEJBQW1DO0FBQ25DLG1EQUF5RDtBQUN6RCxzRkFBc0Y7QUFDdEYsK0NBQXNEO0FBQ3RELCtDQUF5QztBQUN6QyxrRUFBd0M7QUFHeEMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFrRVosa0JBQUc7QUFoRVosTUFBTSxNQUFNLEdBQUc7SUFDYixNQUFNLEVBQUUsZUFBTSxDQUFDLFlBQVksSUFBSSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUc7Q0FDcEUsQ0FBQTtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRWxELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHVCQUFZLEdBQUUsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBRTlCLGtCQUFRLENBQUMsR0FBRyxDQUNWLElBQUkseUJBQVksQ0FDZDtJQUNFLGFBQWEsRUFBRSxPQUFPO0lBQ3RCLGFBQWEsRUFBRSxVQUFVO0NBQzFCLEVBQ0Qsd0JBQVEsQ0FDVCxDQUNGLENBQUE7QUFFRCxrQkFBUSxDQUFDLEdBQUcsQ0FDVixJQUFJLHVCQUFXLENBQ2I7SUFDRSwrSkFBK0o7SUFDL0osY0FBYyxFQUFFLHlCQUFVLENBQUMsMkJBQTJCLEVBQUU7SUFDeEQsV0FBVyxFQUFFLGVBQU0sQ0FBQyxVQUFVO0NBQy9CLEVBQ0QsdUJBQU8sQ0FDUixDQUNGLENBQUE7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBUSxDQUFDLENBQUE7QUFFNUIsK0JBQStCO0FBRy9CLGdCQUFnQjtBQUNoQixnQkFBVztLQUNSLFVBQVUsRUFBRTtLQUNaLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFFaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUU7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsZUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQzFCLENBQUMsQ0FBQyxDQUFBO0FBSUosT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0lBQ3hCLGdCQUFXLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDckIsOEJBQThCO0lBQzlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDakIsQ0FBQyxDQUFDLENBQUEifQ==