require("dotenv").config();

// FIREBASE
export const API_KEY =
  process.env.NEXT_PUBLIC_API_KEY || "AIzaSyDe9f6AVtK1hwD7FwIyCSccPv0GdU36rDw";
export const AUTH_DOMAIN =
  process.env.NEXT_PUBLIC_AUTH_DOMAIN ||
  "clikalia-challenge-872f3.firebaseapp.com";
export const DATABSE_URL =
  process.env.NEXT_PUBLIC_DATABSE_URL ||
  "https://clikalia-challenge-872f3-default-rtdb.firebaseio.com";
export const PROJECT_ID =
  process.env.NEXT_PUBLIC_PROJECT_ID || "clikalia-challenge-872f3";
export const STORAGE_BUCKET =
  process.env.NEXT_PUBLIC_STORAGE_BUCKET ||
  "clikalia-challenge-872f3.appspot.com";
export const SENDER_ID = process.env.NEXT_PUBLIC_SENDER_ID || "565816036116";
export const APP_ID =
  process.env.NEXT_PUBLIC_APP_ID || "1:565816036116:web:abf66142c7cb4c12ad1001";
export const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_MEASUREMENT_ID || "G-ZB4S3P65V5";
