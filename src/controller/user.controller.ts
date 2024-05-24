import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from 'src/service/user.service';

@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param("id") id: string) {
        return this.service.findById(id);
    }
}
