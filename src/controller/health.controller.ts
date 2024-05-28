import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {FirebaseAuthGuard} from "src/auth/guards";
import {Dummy} from "src/model";
import {HealthService} from "src/service";
import {ApiKaretsaka} from "../decorators";

@Controller()
@ApiTags("Health")
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
