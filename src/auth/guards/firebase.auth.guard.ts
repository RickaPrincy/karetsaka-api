import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from "@nestjs/common";
import {IncomingHttpHeaders} from "http";
import {FirebaseAuthService} from "src/service/firebase/firebase.auth.service";

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request.headers);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const user = this.firebaseAuthService.getUserByTokenId(token);
      request["user"] = user;
      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  private extractToken(headers: IncomingHttpHeaders): string | null {
    const BEARER_TYPE = "Bearer";
    const authorizationHeader = headers.authorization || "";
    const [tokenType, token] = authorizationHeader.split(" ");

    return tokenType === BEARER_TYPE ? token : null;
  }
}
