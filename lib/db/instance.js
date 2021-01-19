import firebase from "firebase/app";
import "firebase/database";

import {
  API_KEY,
  AUTH_DOMAIN,
  APP_ID,
  DATABSE_URL,
  MEASUREMENT_ID,
  PROJECT_ID,
  SENDER_ID,
  STORAGE_BUCKET,
} from "../../utils/constants";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABSE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const database = firebase.database();
