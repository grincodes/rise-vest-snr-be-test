import { Result } from "../../../lib/core/logic/Result"
import { UseCaseError } from "../../../lib/core/logic/UseCaseError"

export namespace PostErrors {
  export class PostDoesNotExist extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `Post does not exist`,
      } as UseCaseError)
    }

    public static create(): PostDoesNotExist {
      return new PostDoesNotExist()
    }
  }
}
