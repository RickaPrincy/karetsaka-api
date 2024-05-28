import {Controller, Get, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {FirebaseAuthGuard} from "src/auth/guards";
import {Dummy} from "src/model";
import {HealthService} from "src/service";
import {ApiKaretsaka} from "../docs/decorators";
import {Pagination, PaginationParams} from "./decorators";
import {ApiPagination} from "src/docs/decorators/api-pagination.decorator";

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
  @ApiPagination()
  @ApiKaretsaka({operationId: "getDummies", type: [Dummy]})
  async getDummies(
    @Pagination() pagination: PaginationParams
  ): Promise<Dummy[]> {
    return this.healthService.getDummies(pagination);
  }

  @Get("/dummies/private")
  @UseGuards(FirebaseAuthGuard)
  @ApiBearerAuth()
  @ApiPagination()
  @ApiKaretsaka({operationId: "getPrivateDummies", type: [Dummy]})
  async getPrivateDummies(@Pagination() pagination: PaginationParams) {
    return this.healthService.getDummies(pagination);
  }
}
