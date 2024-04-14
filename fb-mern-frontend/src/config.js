import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import additional authentication methods

const firebaseConfig = {
    apiKey: "AIzaSyAIQ6zCRR4XwLPeNSfuGm7j-G2cRP_MaZY",
    authDomain: "fb-mern-a72ee.firebaseapp.com",
    projectId: "fb-mern-a72ee",
    storageBucket: "fb-mern-a72ee.appspot.com",
    messagingSenderId: "394051204744",
    appId: "1:394051204744:web:f798c63e9afb14fab3d13d"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile };
