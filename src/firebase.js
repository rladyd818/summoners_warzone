import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB_hOSa--QtfnVkbbt50gj6IgAOeg6fVxA",
	authDomain: "warzone-4e2a5.firebaseapp.com",
	databaseURL: "https://warzone-4e2a5.firebaseio.com",
	projectId: "warzone-4e2a5",
	storageBucket: "warzone-4e2a5.appspot.com",
	messagingSenderId: "235692876007",
	appId: "1:235692876007:web:798b2f063f1554eee6c242",
	measurementId: "G-9W1YWVJ9C5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
