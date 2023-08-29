import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"
import { Entity } from "../../../lib/core/domain/Entity"
import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { Result } from "../../../lib/core/logic/Result"
import { Guard } from "../../../lib/core/logic/Guard"
import { UserPassword } from "./UserPassword"

export interface UserProps {
  firstName: string
  lastName: string
  email: string
  password: string
}

export class UserGuard {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName: string

  @IsEmail()
  email: string
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get id(): string {
    return this._id.toString()
  }

  get email(): string {
    return this.props.email
  }

  get password(): string {
    return this.props.password
  }

  get firstName(): string {
    return this.props.firstName
  }

  get lastName(): string {
    return this.props.lastName
  }

  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    const userPasswordOrError = UserPassword.create({ value: props.password })

    if (userPasswordOrError.isFailure) {
      return Result.fail<User>(userPasswordOrError.errorValue())
    }

    props.password = userPasswordOrError.getValue().getHashedValue()

    const guardResult = Guard.validate(UserGuard, props)

    if (guardResult) {
      return Result.fail<User>(guardResult.errMsg)
    }

    const user = new User(
      {
        ...props,
      },
      id,
    )

    return Result.ok<User>(user)
  }
}
