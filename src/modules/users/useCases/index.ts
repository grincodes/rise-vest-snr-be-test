import { userRepo } from "../infra/repo"
import { UserController } from "./UserContoller"
import { UserService } from "./UserService"

const userService = new UserService(userRepo)
const userController = new UserController(userService)

export { userService, userController }
