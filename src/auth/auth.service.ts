import {Injectable, UnauthorizedException} from "@nestjs/common";
import {SigninDto} from "src/model/dto/SigninDto";
import {SignupDto} from "src/model/dto/SignupDto";
import {UserService} from "src/service/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly _userService: UserService) {}

  async signin(_signinDto: SigninDto) {
    throw new UnauthorizedException();
  }

  async signup(_signupDto: SignupDto) {
    throw new UnauthorizedException();
  }
}
