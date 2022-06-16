// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAjWLVS4YY7x1ltOrMUFfGuMdObGFZya7w",
  authDomain: "vue-3-2022-3d309.firebaseapp.com",
  projectId: "vue-3-2022-3d309",
  storageBucket: "vue-3-2022-3d309.appspot.com",
  messagingSenderId: "793695692936",
  appId: "1:793695692936:web:a7476a8f7261cb0c19573d"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};