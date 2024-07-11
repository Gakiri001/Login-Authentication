import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAh-I7kJIAqKkBosuqMV9OlS-RMaOvpmjg",
  authDomain: "login-dcbfa.firebaseapp.com",
  projectId: "login-dcbfa",
  storageBucket: "login-dcbfa.appspot.com",
  messagingSenderId: "290494330100",
  appId: "1:290494330100:web:42b9df4a221cbaeec69aa1",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = "en";

// Google Provider
const googleProvider = new GoogleAuthProvider();

// Facebook Provider
const facebookProvider = new FacebookAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Facebook SDK
  window.fbAsyncInit = function() {
    FB.init({
      appId: 'YOUR_FACEBOOK_APP_ID',
      cookie: true,
      xfbml: true,
      version: 'v12.0'
    });
    FB.AppEvents.logPageView();
  };

  const googleLogin = document.getElementById("googleLoginBtn");
  const fbLogin = document.getElementById("fbLoginBtn");

  if (googleLogin) {
    googleLogin.addEventListener("click", () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log("User signed in with Google:", user);
          window.location.href = "../logged.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during Google sign-in:", errorCode, errorMessage);
        });
    });
  } else {
    console.error("Google login button not found");
  }

  if (fbLogin) {
    fbLogin.addEventListener("click", () => {
      signInWithPopup(auth, facebookProvider)
        .then((result) => {
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const user = result.user;
          console.log("User signed in with Facebook:", user);
          window.location.href = "../logged.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error during Facebook sign-in:", errorCode, errorMessage);
        });
    });
  } else {
    console.error("Facebook login button not found");
  }
});
