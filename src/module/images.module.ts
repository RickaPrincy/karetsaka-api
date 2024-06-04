import {Module} from "@nestjs/common";
import {ImagesController} from "../controller/images.controller";
import {ImagesService} from "../service/images.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Image} from "src/model/image.entity";
import { FirebaseModule } from "./firebase.module";

@Module({
  imports: [TypeOrmModule.forFeature([Image]), FirebaseModule],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}
