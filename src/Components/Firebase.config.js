// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDirePQAzV_-oKje5DqTDlPJiqTy6GCoUE",
  authDomain: "workshop-5ad3d.firebaseapp.com",
  projectId: "workshop-5ad3d",
  storageBucket: "workshop-5ad3d.appspot.com",
  messagingSenderId: "635178227344",
  appId: "1:635178227344:web:b09647b50fc17342912a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;