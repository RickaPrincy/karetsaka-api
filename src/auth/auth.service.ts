import {Injectable} from "@nestjs/common";
import {FirebaseAuthUser} from "src/service/firebase/type";
import {UserService} from "src/service/user.service";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async whoami(firebaseUser: FirebaseAuthUser) {
    const user = await this.userService.findById(firebaseUser.uid);
    if (user) return user;

    return this.userService.saveUser({
      id: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.email,
      picture: firebaseUser.picture,
    });
  }
}
