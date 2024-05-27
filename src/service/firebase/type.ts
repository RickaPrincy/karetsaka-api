import admin from "firebase-admin";

export import FirebaseAuth = admin.auth;
export import FirebaseApp = admin.app;

export type FirebaseAuthUser = {
  uid: string;
  phoneNumber: string;
  email: string;
  picture?: string;
  isEmailVerified: boolean;
} & Pick<FirebaseAuth.DecodedIdToken, "firebase">;
