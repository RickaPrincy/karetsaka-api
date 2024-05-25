import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SigninDto } from 'src/model/dto/SigninDto';
import { SignupDto } from 'src/model/dto/SignupDto';
import { UserService } from 'src/service/user.service';

@Injectable()
export class AuthService {
    constructor (
        private readonly userService: UserService
    ) {}
    
    async signin(signinDto: SigninDto) {
        const {email, password} = signinDto;

        const user = await this.userService.findOneByEmail(email);
        if (!user) throw new NotFoundException(`User '${email}' not found`);
        
        if (password === user.password) return user;
        throw new UnauthorizedException();
    }

    async signup(signupDto: SignupDto) {
        const {email, password, name} = signupDto;

        const user = await this.userService.findOneByEmail(email);
        if (user) throw new ConflictException(`User '${email}' already exists`);

        return await this.userService.saveUser({
            name, email, password
        });
    }

    async whoami() {

    }
}
