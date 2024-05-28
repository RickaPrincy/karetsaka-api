import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {FirebaseAuthUser} from "src/service/firebase/type";

export const AuthenticatedUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): FirebaseAuthUser => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  }
);
