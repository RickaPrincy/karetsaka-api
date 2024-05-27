import {Inject, Injectable} from "@nestjs/common";
import {FirebaseConfigService} from "./firebase.config.service";
import {FirebaseAuthUser} from "./type";

@Injectable()
export class FirebaseAuthService {
  constructor(private readonly firebaseConfig: FirebaseConfigService) {}

  async getUserByTokenId(tokenId: string): Promise<FirebaseAuthUser> {
    return this.firebaseConfig
      .getAuth()
      .verifySessionCookie(tokenId)
      .then((decodedToken): FirebaseAuthUser => {
        return {
          email: decodedToken.email,
          phoneNumber: decodedToken.phone_number,
          picture: decodedToken.picture,
          isEmailVerified: decodedToken.email_verified,
          uid: decodedToken.uid,
          firebase: decodedToken.firebase,
        };
      });
  }
}