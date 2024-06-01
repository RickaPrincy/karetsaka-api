import {NestFactory} from "@nestjs/core";
import {KaretsakaModule} from "./karetsaka.module";
import {config} from "dotenv";
import {INestApplication, ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

config();

function setupSwagger<T>(app: INestApplication<T>) {
  const openapiConfig = new DocumentBuilder()
    .setTitle("Karetsaka Api")
    .setDescription("Karetsaka")
    .setVersion("0.0.1")
    .addServer("https://karetsaka-api.adaptable.app")
    .addTag("Health")
    .addTag("Security")
    .addTag("Users")
    .addTag("Cars")
    .addTag("Images")
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, openapiConfig);
  SwaggerModule.setup("docs", app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(KaretsakaModule, {
    logger: ["error", "warn", "log", "verbose", "fatal"],
  });
  setupSwagger(app);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(+(process.env.PORT || 3000));
}

bootstrap();
