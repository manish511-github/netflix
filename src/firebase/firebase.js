import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCZHQXCKXphQe-OE06U7aLpkfPBef1k0WY",
  authDomain: "netflix-clone-b1425.firebaseapp.com",
  databaseURL: "https://netflix-clone-b1425-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-b1425",
  storageBucket: "netflix-clone-b1425.appspot.com",
  messagingSenderId: "584103306673",
  appId: "1:584103306673:web:c466a7770d58c37b20c990",
  measurementId: "G-27LX1R6EXY"
};
export const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
