import {Controller, Get} from "@nestjs/common";
import {Dummy} from "src/model/dummy.entity";
import {HealthService} from "src/service/health.service";

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get("/ping")
  async ping(): Promise<string> {
    return "pong";
  }

  @Get("/dummies")
  async getDummies(): Promise<Dummy[]> {
    return this.healthService.getDummies();
  }
}
