import {Body, Controller, Get, Param, Put, Query} from "@nestjs/common";
import {ApiBody, ApiTags} from "@nestjs/swagger";
import {ApiCriteria, ApiKaretsaka, ApiPagination} from "src/docs/decorators";
import {Pagination, PaginationParams} from "./decorators";
import {Authenticated, AuthenticatedUser} from "src/auth/decorators";
import {User} from "src/model";
import {UserService} from "src/service";
import {UpdateProfile} from "./model";
import {FirebaseAuthUser} from "src/service/firebase";

@Controller()
@ApiTags("Users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/users")
  @ApiPagination()
  @ApiCriteria({name: "name", type: "string"})
  @ApiKaretsaka({
    operationId: "getUsers",
    type: [User],
  })
  findAll(
    @Pagination() pagination: PaginationParams,
    @Query("name") name?: string
  ) {
    return this.userService.findAll(pagination, {name});
  }

  @Get("/users/:id")
  @Authenticated()
  @ApiKaretsaka({
    operationId: "getUserById",
    type: User,
  })
  findById(@Param("id") id: string) {
    return this.userService.findById(id);
  }

  @Put("/profile")
  @Authenticated()
  @ApiKaretsaka({
    operationId: "updateProfile",
    type: User,
  })
  @ApiBody({type: UpdateProfile})
  updateProfile(
    @AuthenticatedUser() user: FirebaseAuthUser,
    @Body() updatedProfile: UpdateProfile
  ) {
    return this.userService.saveUser({
      id: user.uid,
      email: user.email,
      ...updatedProfile,
    });
  }
}
