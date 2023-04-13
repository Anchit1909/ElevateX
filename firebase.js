// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSdQn3IHGk1N27ZAFqIBIFOXks9i_UqXs",
  authDomain: "gfg-project-2a32c.firebaseapp.com",
  projectId: "gfg-project-2a32c",
  storageBucket: "gfg-project-2a32c.appspot.com",
  messagingSenderId: "708720105574",
  appId: "1:708720105574:web:ae60ee46ba886bbffbf5a7",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig); //this is known as singleton pattern, i.e., we want to initialize our app only once.
const db = getFirestore(app);

export { db };

// const app = initializeApp(firebaseConfig);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
//   useFetchStreams: false,
// });
