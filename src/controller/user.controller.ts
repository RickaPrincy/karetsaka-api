import {Controller, Get, Param} from "@nestjs/common";
import {UserService} from "src/service/user.service";

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get("/users")
  findAll() {
    return this.service.findAll();
  }

  @Get("/users/:id")
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }
}
