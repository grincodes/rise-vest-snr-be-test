import { Result } from "../../../lib/core/logic/Result"
import { UseCaseError } from "../../../lib/core/logic/UseCaseError"

export namespace UserErrors {
  export class AccountAlreadyExists extends Result<UseCaseError> {
    constructor(email: string) {
      super(false, {
        message: `The email ${email} associated for this account already exists`,
      } as UseCaseError)
    }

    public static create(email: string): AccountAlreadyExists {
      return new AccountAlreadyExists(email)
    }
  }

  export class InvalidCredentials extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Credentials are not valid.`,
      } as UseCaseError)
    }

    public static create(): InvalidCredentials {
      return new InvalidCredentials()
    }
  }
}
