import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjUPxrWkPJa_0-R6s3yAB3k2KsDghH_Hg",
  authDomain: "vach-login.firebaseapp.com",
  projectId: "vach-login",
  storageBucket: "vach-login.appspot.com",
  messagingSenderId: "575151947795",
  appId: "1:575151947795:web:72a7d3a0d0dd47ed687fe6"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };