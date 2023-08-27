import { CreateUserDto } from "./dto/createUserDto"
import { IUserRepo } from "./userRepo"

export class UserService {
  private userRepo: IUserRepo

  constructor(userRepo: IUserRepo) {
    this.userRepo = userRepo
  }

  async create(createUserDto: CreateUserDto) {
    await this.userRepo
    return this.usersRepository.create({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    })
  }

  private async validateCreateUserDto(createUserDto: CreateUserDto) {
    try {
      await this.usersRepository.findOne({ email: createUserDto.email })
    } catch (err) {
      return
    }
    throw new UnprocessableEntityException("Email already exists.")
  }

  async verifyUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email })
    const passwordIsValid = await bcrypt.compare(password, user.password)
    if (!passwordIsValid) {
      throw new UnauthorizedException("Credentials are not valid.")
    }
    return user
  }

  async getUser(getUserDto: GetUserDto) {
    return this.usersRepository.findOne(getUserDto)
  }
}