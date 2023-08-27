const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy

class LocalStrategyCustom {
  constructor(usersService) {
    this.usersService = usersService
  }

  async validate(email, password, done) {
    try {
      const user = await this.usersService.verifyUser(email, password)
      if (!user) {
        return done(null, false, { message: "Incorrect email or password" })
      }
      return done(null, user)
    } catch (err) {
      return done(err)
    }
  }
}

module.exports = (usersService) => {
  passport.use(new LocalStrategyCustom(usersService))
}

