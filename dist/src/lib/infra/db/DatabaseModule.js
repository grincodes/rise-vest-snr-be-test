"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = exports.readConnection = exports.writeConnection = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../../../config");
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
            entities: ["src/**/**.model{.ts,.js}"],
            migrations: ["src/lib/infra/db/migrations/*{.ts,.js}"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2VNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhL2RiL0RhdGFiYXNlTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUE2SDtBQUU3SCw0Q0FBd0M7QUFpQjdCLFFBQUEsZUFBZSxHQUFHLEVBQXFCLENBQUE7QUFDdkMsUUFBQSxjQUFjLEdBQUcsRUFBb0IsQ0FBQTtBQUVoRCxNQUFhLGVBQWU7SUFHMUI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsQ0FBQztZQUMvQixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsZUFBTSxDQUFDLGFBQWE7WUFDMUIsSUFBSSxFQUFFLGVBQU0sQ0FBQyxhQUFhO1lBQzFCLFFBQVEsRUFBRSxlQUFNLENBQUMsYUFBYTtZQUM5QixRQUFRLEVBQUUsZUFBTSxDQUFDLGFBQWE7WUFDOUIsUUFBUSxFQUFFLGVBQU0sQ0FBQyxpQkFBaUI7WUFDbEMsV0FBVyxFQUFFLGVBQU0sQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxlQUFNLENBQUMsZ0JBQWdCO1lBQ2hDLFFBQVEsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1lBQ3RDLFVBQVUsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3ZELENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxLQUFLLENBQUMsVUFBVTtRQUNkLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUU7WUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFBO1NBQ2pEO1FBQ0QsdUJBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUE7UUFDckQsc0JBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQTtJQUMxQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWCxNQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDakMsQ0FBQztDQUNGO0FBOUJELDBDQThCQyJ9