import {Module} from "@nestjs/common";
import {DatabaseModule} from "./module/database";
import {AuthModule} from "./auth/auth.module";
import {
  AppointmentsModule,
  FirebaseModule,
  HealthModule,
  ImagesModule,
  UserModule,
  CarsModule,
} from "./module";

@Module({
  imports: [
    DatabaseModule,
    FirebaseModule,
    UserModule,
    AuthModule,
    CarsModule,
    ImagesModule,
    AppointmentsModule,
    HealthModule,
  ],
})
export class KaretsakaModule {}
