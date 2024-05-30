import {UseGuards, applyDecorators} from "@nestjs/common";
import {ApiBearerAuth} from "@nestjs/swagger";
import {FirebaseAuthGuard} from "src/auth/guards";

export function Authenticated() {
  return applyDecorators(UseGuards(FirebaseAuthGuard), ApiBearerAuth());
}
