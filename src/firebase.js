import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Database, getDatabase } from "firebase/database"
              
const firebaseConfig = {
  apiKey: "AIzaSyDW8BGE0C2CMTXpXVfO5YBROeM29KvM8tI",
  authDomain: "celebal-hotel.firebaseapp.com",
  projectId: "celebal-hotel",
  storageBucket: "celebal-hotel.appspot.com",
  messagingSenderId: "462632378322",
  appId: "1:462632378322:web:7a6c2333cd82834427f20b",
  measurementId: "G-HBZFQ6ZZQJ",
  databaseURL:'https://celebal-hotel-default-rtdb.firebaseio.com'
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getDatabase();
export default app;
