import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserModule} from "./module/user.module";
import {DatabaseModule} from "./module/database.module";
import {AuthModule} from "./auth/auth.module";
import {CarsModule} from "./module/cars.module";
import {ImagesModule} from "./module/images.module";
import {AppointmentsModule} from "./module/appointments.module";
import {HealthModule} from "./module/health.module";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    CarsModule,
    ImagesModule,
    AppointmentsModule,
    HealthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
