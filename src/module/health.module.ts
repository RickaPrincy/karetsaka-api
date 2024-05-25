import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HealthController} from "src/controller/health.controller";
import {HealthService} from "src/service/health.service";
import {Dummy} from "src/model/dummy.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Dummy])],
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {}
