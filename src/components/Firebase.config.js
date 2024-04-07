// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth} from "firebase/auth";

// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyASPRfYflY6p_6QbskmqV4WLZ-i5tkOIck",
//   authDomain: "otp-45d10.firebaseapp.com",
//   projectId: "otp-45d10",
//   storageBucket: "otp-45d10.appspot.com",
//   messagingSenderId: "1016793523822",
//   appId: "1:1016793523822:web:3eb736efd962afe1a4687f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const RecaptchaVerifier = RecaptchaVerifier(app)

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2EJXrSnnV6URNpbOj_eE-Mjbq5i-Es5E",
  authDomain: "practo-clone-4dbb7.firebaseapp.com",
  projectId: "practo-clone-4dbb7",
  storageBucket: "practo-clone-4dbb7.appspot.com",
  messagingSenderId: "447015480104",
  appId: "1:447015480104:web:874b584d1fc3bb79c93e1d",
  measurementId: "G-ZQBSMBT8T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
export const RecaptchaVerifier = RecaptchaVerifier(app)
