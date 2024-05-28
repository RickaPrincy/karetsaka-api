import {Controller, Get, Param, UseGuards} from "@nestjs/common";
import {FirebaseAuthGuard} from "src/auth/guards";
import {ApiKaretsaka} from "src/docs/decorators";
import {User} from "src/model";
import {UserService} from "src/service";
import {Pagination, PaginationParams} from "./decorators";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {ApiPagination} from "src/docs/decorators/api-pagination.decorator";

@Controller()
@ApiBearerAuth()
@ApiTags("Users")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get("/users")
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  @ApiPagination()
  @ApiKaretsaka({
    operationId: "getUsers",
    type: [User],
  })
  findAll(@Pagination() pagination: PaginationParams) {
    return this.service.findAll(pagination);
  }

  @Get("/users/:id")
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  @ApiKaretsaka({
    operationId: "getUserById",
    type: User,
  })
  findById(@Param("id") id: string) {
    return this.service.findById(id);
  }
}
