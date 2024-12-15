import admin from 'firebase-admin';

// Path to your service account key JSON file
const serviceAccount = process.env.SERVICE_ACCOUNT_JSON ?? "";

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(serviceAccount))
});

export const db = admin.firestore();