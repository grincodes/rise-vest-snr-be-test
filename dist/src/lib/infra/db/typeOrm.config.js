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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm = __importStar(require("typeorm"));
const dotenv = __importStar(require("dotenv"));
const config_1 = require("../../../config");
dotenv.config();
exports.default = new typeorm.DataSource({
    type: "postgres",
    host: config_1.Config.DATABASE_HOST,
    port: config_1.Config.DATABASE_PORT,
    database: config_1.Config.DATABASE_NAME,
    username: config_1.Config.DATABASE_USER,
    password: config_1.Config.DATABASE_PASSWORD,
    synchronize: config_1.Config.DATABASE_SYNC,
    logging: config_1.Config.DATABASE_LOGGING,
    entities: ["src/**/**.model{.ts,.js}"],
    migrations: ["src/lib/infra/db/migrations/*{.ts,.js}"],
    extra: {
        trustServerCertificate: true,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZU9ybS5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2RiL3R5cGVPcm0uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBa0M7QUFFbEMsK0NBQWdDO0FBQ2hDLDRDQUF3QztBQUV4QyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFZixrQkFBZSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDcEMsSUFBSSxFQUFFLFVBQVU7SUFDaEIsSUFBSSxFQUFFLGVBQU0sQ0FBQyxhQUFhO0lBQzFCLElBQUksRUFBRSxlQUFNLENBQUMsYUFBYTtJQUMxQixRQUFRLEVBQUUsZUFBTSxDQUFDLGFBQWE7SUFDOUIsUUFBUSxFQUFFLGVBQU0sQ0FBQyxhQUFhO0lBQzlCLFFBQVEsRUFBRSxlQUFNLENBQUMsaUJBQWlCO0lBQ2xDLFdBQVcsRUFBRSxlQUFNLENBQUMsYUFBYTtJQUNqQyxPQUFPLEVBQUUsZUFBTSxDQUFDLGdCQUFnQjtJQUNoQyxRQUFRLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztJQUN0QyxVQUFVLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztJQUN0RCxLQUFLLEVBQUU7UUFDTCxzQkFBc0IsRUFBRSxJQUFJO0tBQzdCO0NBQ0YsQ0FBQyxDQUFBIn0=