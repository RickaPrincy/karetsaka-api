import {Module} from "@nestjs/common";
import {DatabaseModule} from "./module/database/database.module";
import {UserModule} from "./module/user.module";
import {AuthModule} from "./auth/auth.module";
import {CarsModule} from "./module/cars.module";
import {ImagesModule} from "./module/images.module";
import {AppointmentsModule} from "./module/appointments.module";
import {HealthModule} from "./module/health.module";
import {FirebaseModule} from "./module/firebase.module";

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
