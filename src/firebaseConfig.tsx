// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // appId: import.meta.env.VITE_FIREBASE_APP_ID,
    // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
    // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    apiKey: "AIzaSyDAWR4gwKJyWly4C92j2R_5gg95If4aUSs",
    authDomain: "astro-463ea.firebaseapp.com",
    projectId: "astro-463ea",
    storageBucket: "astro-463ea.appspot.com",
    messagingSenderId: "950639520557",
    appId: "1:950639520557:web:43d10d30bdf840970f81a4",
    measurementId: "G-6LKW781Z6R"    
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);