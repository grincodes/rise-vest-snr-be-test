import { Users } from "../entity/UserEntity.model"
import { UserRepo } from "./UserRepo"

const userRepo = new UserRepo(Users)

export { userRepo }
