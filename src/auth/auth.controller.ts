import {Controller, Get} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {Authenticated, AuthenticatedUser} from "./decorators";
import {ApiKaretsaka} from "src/docs/decorators";
import {User} from "src/model";
import {FirebaseAuthUser} from "src/service/firebase";

@Controller()
@ApiTags("Security")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("/whoami")
  @Authenticated()
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