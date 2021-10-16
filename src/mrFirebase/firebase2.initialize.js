import firebaseConfig from "./firebase1.config";
import { initializeApp } from "firebase/app";
const initializeNow = () => {
  initializeApp(firebaseConfig);
};
export default initializeNow;
