import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { UserPassword } from "../domain/UserPassword"
import { User } from "../domain/User"
import { Users } from "../infra/entity/UserEntity.model"

export class UserMap {
  public static toPersistence(user: User): Omit<Users, "posts"> {
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }
  }

  public static toDomain(raw: any): User {
    const userPasswordOrError = UserPassword.create(raw.password)
    const userOrError = User.create(
      {
        firstName: raw.firstName,
        lastName: raw.lastName,
        email: raw.email,
        password: raw.password,
      },
      new UniqueEntityID(raw.id),
    )

    userOrError.isFailure ? console.log(userOrError.error) : ""

    return userOrError.isSuccess ? userOrError.getValue() : null
  }
}
