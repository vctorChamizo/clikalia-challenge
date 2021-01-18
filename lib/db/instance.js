import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDe9f6AVtK1hwD7FwIyCSccPv0GdU36rDw",
  authDomain: "clikalia-challenge-872f3.firebaseapp.com",
  databaseURL: "https://clikalia-challenge-872f3-default-rtdb.firebaseio.com",
  projectId: "clikalia-challenge-872f3",
  storageBucket: "clikalia-challenge-872f3.appspot.com",
  messagingSenderId: "565816036116",
  appId: "1:565816036116:web:abf66142c7cb4c12ad1001",
  measurementId: "G-ZB4S3P65V5",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const database = firebase.database();
