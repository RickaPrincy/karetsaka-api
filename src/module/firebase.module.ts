import { Module } from '@nestjs/common';
import { FirebaseAuthService } from 'src/service/firebase/firebase.auth.service';
import { FirebaseConfigService } from 'src/service/firebase/firebase.config.service';

@Module({
  providers: [FirebaseConfigService, FirebaseAuthService],
  exports: [FirebaseAuthService]
})
export class FirebaseModule {}
