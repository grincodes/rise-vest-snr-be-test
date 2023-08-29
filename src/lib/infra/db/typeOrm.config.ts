import * as typeorm from "typeorm"
import * as path from "path"
import * as dotenv from "dotenv"
import { Config } from "../../../config"

dotenv.config()

export default new typeorm.DataSource({
  type: "postgres",
  host: Config.DATABASE_HOST,
  port: Config.DATABASE_PORT,
  database: Config.DATABASE_NAME,
  username: Config.DATABASE_USER,
  password: Config.DATABASE_PASSWORD,
  synchronize: Config.DATABASE_SYNC,
  logging: Config.DATABASE_LOGGING,
  entities: ["src/**/**.model{.ts,.js}"],
  migrations: ["src/lib/infra/db/migrations/*{.ts,.js}"],
  extra: {
    trustServerCertificate: true,
  },
})
