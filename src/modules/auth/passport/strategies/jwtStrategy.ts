import passport from "passport"
import passportJWT from "passport-jwt"
const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
import jwt from "jsonwebtoken"
import { Config } from "../../../../config"

class JwtPassportStrategy {}

const validate: any = (id: string) => {}

const jwtStrategy = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: Config.JWT_SECRET,
  },
  (jwtPayload, done) => {
    const user = validate(jwtPayload.id)
    //  users.find((u) => u.id === jwtPayload.id)
    if (user) {
      return done(null, user)
    } else {
      return done(null, false, { message: "User not found" })
    }
  },
)
