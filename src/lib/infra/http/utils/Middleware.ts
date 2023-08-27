import rateLimit from "express-rate-limit"

export class Middleware {
  // private authService: IAuthService

  // constructor(authService: IAuthService) {
  //   this.authService = authService
  // }

  private endRequest(status: 400 | 401 | 403, message: string, res: any): any {
    return res.status(status).send({ message })
  }

  public static createRateLimit(mins: number, maxRequests: number) {
    return rateLimit({
      windowMs: mins * 60 * 1000,
      max: maxRequests,
      standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
      legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    })
  }

  public ensureWebHookIsFromFlutterWave() {
    return async (req, res, next) => {
      const secretHash = process.env.FLW_SECRET_HASH
      const signature = req.headers["verif-hash"]
      if (!signature || signature !== secretHash) {
        // This request isn't from Flutterwave; discard
        this.endRequest(403, "Invalid request source", res)
      }
      return next()
    }
  }
}
