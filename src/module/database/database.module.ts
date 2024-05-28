import {ConfigModule, ConfigService} from "@nestjs/config";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Appointment} from "src/model/appointment.entity";
import {Car} from "src/model/car.entity";
import {Image} from "src/model/image.entity";
import {User} from "src/model/user.entity";
import {Dummy} from "src/model/dummy.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get("DATABASE_URL"),
        entities: [Dummy, User, Car, Image, Appointment],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
