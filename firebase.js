import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHkPsS92VkdpQ2zwgtrttj0TxaKtDsjuk",
  authDomain: "docs-57a3d.firebaseapp.com",
  projectId: "docs-57a3d",
  storageBucket: "docs-57a3d.appspot.com",
  messagingSenderId: "1090613951903",
  appId: "1:1090613951903:web:9409777beeaa7d883891aa",
  measurementId: "G-89PHF442XV",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
