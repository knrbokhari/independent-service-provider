// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC6JRt9x4swkbn5I7RK0AZkO07yKvokf3k",
//   authDomain: "independent-service-prov-8136a.firebaseapp.com",
//   projectId: "independent-service-prov-8136a",
//   storageBucket: "independent-service-prov-8136a.appspot.com",
//   messagingSenderId: "798506335809",
//   appId: "1:798506335809:web:a87a2e1f8cb6131124d0c0",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
