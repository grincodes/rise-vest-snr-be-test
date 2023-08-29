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
exports.DatabaseService = exports.readConnection = exports.writeConnection = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const typeorm_1 = require("typeorm");
const config_1 = require("../../../config");
const UserEntity_model_1 = require("../../../modules/users/infra/entity/UserEntity.model");
const PostEntity_model_1 = require("../../../modules/posts/infra/entity/PostEntity.model");
const CommentEntity_model_1 = require("../../../modules/comments/infra/entity/CommentEntity.model");
exports.writeConnection = {};
exports.readConnection = {};
class DatabaseService {
    constructor() {
        this.dataSource = new typeorm_1.DataSource({
            type: "postgres",
            host: config_1.Config.DATABASE_HOST,
            port: config_1.Config.DATABASE_PORT,
            database: config_1.Config.DATABASE_NAME,
            username: config_1.Config.DATABASE_USER,
            password: config_1.Config.DATABASE_PASSWORD,
            synchronize: config_1.Config.DATABASE_SYNC,
            logging: config_1.Config.DATABASE_LOGGING,
            entities: [UserEntity_model_1.Users, PostEntity_model_1.Posts, CommentEntity_model_1.Comments],
            migrations: ["src/lib/infra/db/migrations/*{.js}"],
        });
    }
    async initialize() {
        await this.dataSource.initialize();
        if (!this.dataSource.isInitialized) {
            throw new Error("DataSource is not initialized");
        }
        exports.writeConnection = this.dataSource.createQueryRunner();
        exports.readConnection = this.dataSource.manager;
    }
    async destroy() {
        await this.dataSource.destroy();
    }
}
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2RiL0RhdGFiYXNlTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQWdDO0FBQ2hDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQTtBQUNmLHFDQUE2SDtBQUM3SCw0Q0FBd0M7QUFDeEMsMkZBQTRFO0FBQzVFLDJGQUE0RTtBQUM1RSxvR0FBc0Y7QUFpQjNFLFFBQUEsZUFBZSxHQUFHLEVBQXFCLENBQUE7QUFDdkMsUUFBQSxjQUFjLEdBQUcsRUFBb0IsQ0FBQTtBQUVoRCxNQUFhLGVBQWU7SUFHMUI7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsQ0FBQztZQUMvQixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsZUFBTSxDQUFDLGFBQWE7WUFDMUIsSUFBSSxFQUFFLGVBQU0sQ0FBQyxhQUFhO1lBQzFCLFFBQVEsRUFBRSxlQUFNLENBQUMsYUFBYTtZQUM5QixRQUFRLEVBQUUsZUFBTSxDQUFDLGFBQWE7WUFDOUIsUUFBUSxFQUFFLGVBQU0sQ0FBQyxpQkFBaUI7WUFDbEMsV0FBVyxFQUFFLGVBQU0sQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxlQUFNLENBQUMsZ0JBQWdCO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLHdCQUFLLEVBQUMsd0JBQUssRUFBQyw4QkFBUSxDQUFDO1lBQ2hDLFVBQVUsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1NBQ25ELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHQSxLQUFLLENBQUMsVUFBVTtRQUNmLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsdUJBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDckQsc0JBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQTtJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDakMsQ0FBQztDQUNGO0FBaENELDBDQWdDQyJ9