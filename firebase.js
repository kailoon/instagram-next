// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI2aWYPN25LBpY6YL5XX9QIYXNxY9bbXs",
  authDomain: "instagram-next-ad1a0.firebaseapp.com",
  projectId: "instagram-next-ad1a0",
  storageBucket: "instagram-next-ad1a0.appspot.com",
  messagingSenderId: "619880445042",
  appId: "1:619880445042:web:43ced6e68e977a4eeb7eeb",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
