
import { CreateResponse, UsersPaginatedResponse } from "../../../lib/common/constants"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import { Either, Result, left, right } from "../../../lib/core/logic/Result"
import { User } from "../domain/User"
import { UserErrors } from "../domain/UserErrors"
import { UserPassword } from "../domain/UserPassword"
import { CreateUserDto } from "../dto/CreateUserDto"
import { UserRepo } from "../infra/repo/UserRepo"

type Response = Either<
  GenericAppError.UnexpectedError | GenericAppError.NotFoundError | UserErrors.AccountAlreadyExists | UserErrors.InvalidCredentials | DomainError,
  Result<User> | Result<CreateResponse> | Result<UsersPaginatedResponse>
>

export class UserService {
  private userRepo: UserRepo

  constructor(userRepo: UserRepo) {
    this.userRepo = userRepo
  }

  async createUser(createUserDto: CreateUserDto): Promise<Response> {
    try {
      const userExists = await this.userRepo.userExists(createUserDto.email)

      if (userExists) {
        return left(UserErrors.AccountAlreadyExists.create(createUserDto.email)) as Response
      }

      const userOrError = User.create(createUserDto)

      if (userOrError.isFailure) {
        return left(DomainError.create(userOrError.errorValue())) as Response
      }

      const user = userOrError.getValue()

      const res = await this.userRepo.saveUser(user)

      return right(
        Result.ok<CreateResponse>({
          id: res.id,
        }),
      )
    } catch (error) {
      return left(error) as Response
    }
  }

  async getAllPaginatedUsers(dto: any): Promise<Response> {
    try {
      const res = await this.userRepo.findAllPaginatedUsers(dto)

      return right(Result.ok<UsersPaginatedResponse>(res))
    } catch (error) {
      return left(error) as Response
    }
  }

  async verifyUser(email: string, password: string): Promise<any> {
    try {
      const user = await this.userRepo.findByEmail(email)

      if (!user) {
        return null
      }

      const userPasswordOrError = await UserPassword.create({ value: user.password })

      if (userPasswordOrError.isFailure) {
        return null
      }
      const userPassword = userPasswordOrError.getValue()

      const passwordIsValid = userPassword.comparePassword(password)

      if (!passwordIsValid) {
        return null
      }

      return user
    } catch (error) {
      if (error.constructor == GenericAppError.NotFoundError) {
        return null
      }
      throw error
    }
  }

  async validateUser(id: string) {
    try {
      const user = await this.userRepo.findByUserId(id)
      return user
    } catch (error) {
      throw error
    }
  }
}
