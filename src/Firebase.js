
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH0DZGtEwinLknTDHlAf8KPMgZrkFtI1E",
  authDomain: "chat-561dc.firebaseapp.com",
  projectId: "chat-561dc",
  storageBucket: "chat-561dc.appspot.com",
  messagingSenderId: "847537185315",
  appId: "1:847537185315:web:4fa004da599b7e0b9cc796"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()