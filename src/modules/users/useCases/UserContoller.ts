import { BaseController } from "../../../lib/core/infra/BaseController"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import { UserErrors } from "../domain/UserErrors"
import { UserService } from "./UserService"

export class UserController extends BaseController {
  private userService: UserService

  constructor(userService: UserService) {
    super()
    this.userService = userService
  }

  async createUser(): Promise<any> {
    const dto = this.req.body
    try {
      const result = await this.userService.createUser(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.NotFoundError:
            return this.notFound(error.errorValue().message)
          case DomainError:
            return this.clientError(error.errorValue().message)
          case UserErrors.AccountAlreadyExists:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res, resultVal.getValue())
      }
    } catch (err) {
      this.fail(err)
    }
  }

  async getAllPaginatedUsers(): Promise<any> {
    const dto = this.req?.params
    try {
      const result = await this.userService.getAllPaginatedUsers(dto)
      const resultVal = result.value
      return this.ok(this.res, resultVal.getValue())
    } catch (err) {
      this.fail(err)
    }
  }


}
