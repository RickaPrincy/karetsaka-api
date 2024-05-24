import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from 'src/model/appointment.entity';
import { Car } from 'src/model/car.entity';
import { Image } from 'src/model/image.entity';
import { User } from 'src/model/user.entity';

config();
const configService = new ConfigService();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('POSTGRES_HOSTNAME'),
      port: Number(configService.get('POSTGRES_PORT')),
      username: configService.get('POSTGRES_USER'),
      password: configService.get('POSTGRES_PASSWORD'),
      database: configService.get('POSTGRES_DATABASE'),
      entities: [User, Car, Image, Appointment],
      synchronize: true,
    }),
  ],
})

export class DatabaseModule {}