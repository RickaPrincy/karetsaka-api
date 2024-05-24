import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from 'src/model/dto/SignupDto';
import { AuthService } from './auth.service';
import { SigninDto } from 'src/model/dto/SigninDto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post("signin")
    signin(@Body() signinDto: SigninDto) {
        return this.authService.signin(signinDto);
    }

    @Post("signup")
    signup(@Body() signupDto: SignupDto) {
        return this.authService.signup(signupDto);
    }
}
