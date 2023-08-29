import { ValueObject } from "../../../lib/core/domain/ValueObject"
import { Guard } from "../../../lib/core/logic/Guard"
import * as bcrypt from "bcryptjs"
import { IsStrongPassword } from "class-validator"
import { Result } from "../../../lib/core/logic/Result"

interface UserPasswordProps {
  value: string
}

export class PasswordGuard {
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string
}

export class UserPassword extends ValueObject<UserPasswordProps> {
  static hashedLength = 60
  get value(): string {
    return this.props.value
  }

  private constructor(props) {
    super(props)
  }

  /**
   * @method comparePassword
   * @desc Compares as plain-text and hashed password.
   */

  public comparePassword(plainTextPassword: string): boolean {
    let hashed = this.getHashedValue()
    return this.bcryptCompare(plainTextPassword, hashed)
  }

  private bcryptCompare(plainText: string, hashed: string): boolean {
    const isPasswordValid = bcrypt.compareSync(plainText, hashed)
    return isPasswordValid
  }

  public static isAlreadyHashed(pwd: string): boolean {
    return pwd.length == UserPassword.hashedLength
  }

  private hashPassword(password: string): string {
    const hash = bcrypt.hashSync(password, 10)
    return hash
  }

  public getHashedValue(): string {
    if (UserPassword.isAlreadyHashed(this.props.value)) {
      return this.props.value
    } else {
      return this.hashPassword(this.props.value)
    }
  }

  public static create(props: UserPasswordProps): Result<UserPassword> {
    // check if password is hashed
    if (UserPassword.isAlreadyHashed(props.value)) {
      return Result.ok<UserPassword>(
        new UserPassword({
          value: props.value,
        }),
      )
    }
    const propsResult = Guard.validate(PasswordGuard, { password: props.value })

    if (propsResult) {
      return Result.fail<UserPassword>(propsResult.errMsg)
    }

    return Result.ok<UserPassword>(
      new UserPassword({
        value: props.value,
      }),
    )
  }
}
