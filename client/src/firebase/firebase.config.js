import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  // apiKey: "AIzaSyDQWPTsALc9vbNLmxmtRG6N4Fgt9oUqlbM",
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,



  apiKey: "AIzaSyDQWPTsALc9vbNLmxmtRG6N4Fgt9oUqlbM",
  authDomain: "stay-vista-47c5b.firebaseapp.com",
  projectId: "stay-vista-47c5b",
  storageBucket: "stay-vista-47c5b.firebasestorage.app",
  messagingSenderId: "861551160745",
  appId: "1:861551160745:web:67453e49cb0d503a1528b8"
}

export const app = initializeApp(firebaseConfig)
// import.meta.env.VITE_apiKey