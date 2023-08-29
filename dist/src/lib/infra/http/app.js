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
//handle errors
// app.use((error, req, res, next) => {
//   switch (error.constructor) {
//     case GenericAppError.UnexpectedError:
//       res.status(409).json({ message: error.errorValue().message || "Unexpected Error" })
//     case GenericAppError.NotFoundError:
//       res.status(404).json({ message: error.errorValue().message || "Does not exist" })
//     case DomainError:
//       res.status(400).json({ message: error.errorValue().message || "Invalid Request" })
//     default:
//       res.status(500).json({ message: error.errorValue().message || "Internal Server Error" })
//   }
// })
// initialize db
db_1.dataService
    .initialize()
    .then(() => {
    console.log("Db💾 connected...");
    app.listen(config_1.Config.PORT || 4000, () => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9pbmZyYS9odHRwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFnQztBQUNoQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFDZixzREFBNkI7QUFDN0IsOERBQW9DO0FBQ3BDLGdEQUF1QjtBQUN2QixvREFBMkI7QUFDM0IsaUNBQW1DO0FBQ25DLDRDQUF3QztBQUN4Qyx3REFBK0I7QUFDL0IsOEJBQW1DO0FBQ25DLG1EQUF5RDtBQUN6RCxzRkFBc0Y7QUFDdEYsK0NBQXNEO0FBQ3RELCtDQUF5QztBQUN6QyxrRUFBd0M7QUFJeEMsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUE4RVosa0JBQUc7QUE1RVosTUFBTSxNQUFNLEdBQUc7SUFDYixNQUFNLEVBQUUsZUFBTSxDQUFDLFlBQVksSUFBSSxlQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUc7Q0FDcEUsQ0FBQTtBQUVELEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRWxELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtBQUNyQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUE7QUFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHVCQUFZLEdBQUUsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO0FBRTlCLGtCQUFRLENBQUMsR0FBRyxDQUNWLElBQUkseUJBQVksQ0FDZDtJQUNFLGFBQWEsRUFBRSxPQUFPO0lBQ3RCLGFBQWEsRUFBRSxVQUFVO0NBQzFCLEVBQ0Qsd0JBQVEsQ0FDVCxDQUNGLENBQUE7QUFFRCxrQkFBUSxDQUFDLEdBQUcsQ0FDVixJQUFJLHVCQUFXLENBQ2I7SUFDRSwrSkFBK0o7SUFDL0osY0FBYyxFQUFFLHlCQUFVLENBQUMsMkJBQTJCLEVBQUU7SUFDeEQsV0FBVyxFQUFFLGVBQU0sQ0FBQyxVQUFVO0NBQy9CLEVBQ0QsdUJBQU8sQ0FDUixDQUNGLENBQUE7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsYUFBUSxDQUFDLENBQUE7QUFFNUIsK0JBQStCO0FBRS9CLGVBQWU7QUFDZix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLDRDQUE0QztBQUM1Qyw0RkFBNEY7QUFDNUYsMENBQTBDO0FBQzFDLDBGQUEwRjtBQUMxRix3QkFBd0I7QUFDeEIsMkZBQTJGO0FBRTNGLGVBQWU7QUFDZixpR0FBaUc7QUFDakcsTUFBTTtBQUNOLEtBQUs7QUFFTCxnQkFBZ0I7QUFDaEIsZ0JBQVc7S0FDUixVQUFVLEVBQUU7S0FDWixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBRWhDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLGVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO0lBQzFELENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMxQixDQUFDLENBQUMsQ0FBQTtBQUVKLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtJQUN4QixnQkFBVyxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBQ3JCLDhCQUE4QjtJQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pCLENBQUMsQ0FBQyxDQUFBIn0=