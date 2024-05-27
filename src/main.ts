import {NestFactory} from "@nestjs/core";
import {KaretsakaModule} from "./karetsaka.module";
import {config} from "dotenv";
import {ValidationPipe} from "@nestjs/common";

config();
async function bootstrap() {
  const app = await NestFactory.create(KaretsakaModule);
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors();
  await app.listen(+(process.env.PORT || 3000));
}

bootstrap();
