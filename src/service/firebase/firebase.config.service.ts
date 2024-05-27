import {Injectable} from "@nestjs/common";
import {config} from "dotenv";
import admin from "firebase-admin";
import {FirebaseApp, FirebaseAuth} from "./type";

config();

@Injectable()
export class FirebaseConfigService {
  private readonly firebaseApp: FirebaseApp.App;

  constructor() {
    const firebaseConfig = {
      credential: admin.credential.cert(this.getConfig()),
      databaseURL: this.getDatabaseUrl()
    };
    
    this.firebaseApp = admin.initializeApp(firebaseConfig);
  }

  getApp(): FirebaseApp.App {
    return this.firebaseApp;
  }

  getAuth(): FirebaseAuth.Auth {
    return this.firebaseApp.auth();
  }

  private getConfig() {
    return JSON.parse(process.env.FIREBASE_TOKEN);
  }

  private getDatabaseUrl() {
    return process.env.DATABASE_URL;
  }
}
