import {Controller, Get, Req, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {FirebaseAuthGuard} from "./guards/firebase.auth.guard";
import {AuthenticatedUser} from "./decorators";
import {ApiKaretsaka} from "src/decorators";
import {User} from "src/model/user.entity";
import {FirebaseAuthUser} from "src/service/firebase/type";

@Controller()
@ApiTags("Security")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/whoami")
  @UseGuards(FirebaseAuthGuard)
  @ApiKaretsaka({
    operationId: "whoami",
    type: User,
    operationOptions: {
      description: "Tell who you are",
    },
  })
  whoami(@AuthenticatedUser() user: FirebaseAuthUser) {
    return this.authService.whoami(user);
  }
}
