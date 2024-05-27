import {Controller, Get, UseGuards} from "@nestjs/common";
import { FirebaseAuthGuard } from "src/auth/guards/firebase.auth.guard";
import {HealthService} from "src/service/health.service";

@Controller()
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get("/ping")
  async ping() {
    return "pong";
  }

  @Get("/dummies")
  async getDummies() {
    return this.healthService.getDummies();
  }

  @UseGuards(FirebaseAuthGuard)
  @Get("/dummies/private")
  async getPrivateDummies() {
    return this.healthService.getDummies();
  }
}
