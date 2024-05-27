import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {HealthController} from "src/controller/health.controller";
import {HealthService} from "src/service/health.service";
import {Dummy} from "src/model/dummy.entity";
import { FirebaseModule } from "./firebase.module";

@Module({
  imports: [TypeOrmModule.forFeature([Dummy]), FirebaseModule],
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {}
