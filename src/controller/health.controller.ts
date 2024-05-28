import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {FirebaseAuthGuard} from "src/auth/guards/firebase.auth.guard";
import {Dummy} from "src/model/dummy.entity";
import {HealthService} from "src/service/health.service";
import {ApiKaretsaka} from "./utils/api-karetsaka.decorator";

@Controller()
@ApiTags("Heatlth")
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get("/ping")
  @ApiKaretsaka({operationId: "ping", type: "string"})
  async ping() {
    return "pong";
  }

  @Get("/dummies")
  @ApiKaretsaka({operationId: "getDummies", type: [Dummy]})
  async getDummies(): Promise<Dummy[]> {
    return this.healthService.getDummies();
  }

  @Get("/dummies/private")
  @UseGuards(FirebaseAuthGuard)
  @ApiKaretsaka({operationId: "getPrivateDummies", type: [Dummy]})
  async getPrivateDummies() {
    return this.healthService.getDummies();
  }
}
