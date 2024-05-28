import {ConfigModule, ConfigService} from "@nestjs/config";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Appointment, Car, Dummy, User, Image} from "src/model";

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
