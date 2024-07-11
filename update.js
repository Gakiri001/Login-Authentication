import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
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
const provider = new GoogleAuthProvider();

const user = auth.currentUser



function updateUserProfile(user) {
  const userName = user.displayName
  const userEmail = user.email
  const userProfilePic = user.photoURL

  document.getElementById('userName').textContent = userName;
  document.getElementById('userEmail').textContent = userEmail;
  document.getElementById("userProfilePic").src = userProfilePic;
}

onAuthStateChanged(auth, (user) => {
  if(user){
    updateUserProfile(user)
    const uid = user.uid
    return uid
  }
  else{
    alert("create account & Login")
  }
})