import { AuthController } from "./AuthController"
import { AuthService } from "./AuthService"

const authService = new AuthService()
const authController = new AuthController(authService)

export { authService, authController }
