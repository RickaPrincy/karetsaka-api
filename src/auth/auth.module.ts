import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {AuthController} from "./auth.controller";
import {UserModule} from "src/module/user.module";
import {UserService} from "src/service/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "src/model/user.entity";
import {FirebaseModule} from "src/module/firebase.module";

@Module({
  imports: [FirebaseModule, UserModule, TypeOrmModule.forFeature([User])],
  providers: [AuthService, UserService],
  controllers: [AuthController],
})
export class AuthModule {}
