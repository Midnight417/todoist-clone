import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBKUAmFqhz_NPixfDOJOQ7ebSrv379Aeno",
    authDomain: "todolist-clone-3fa96.firebaseapp.com",
    databaseURL: "https://todolist-clone-3fa96-default-rtdb.firebaseio.com",
    projectId: "todolist-clone-3fa96",
    storageBucket: "todolist-clone-3fa96.appspot.com",
    messagingSenderId: "922111724840",
    appId: "1:922111724840:web:fdb2b0c7dd0ddc702c941d"
});

export { firebaseConfig as firebase }