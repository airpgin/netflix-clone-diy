import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCEnEQbp7vKS2krza7YbQqsTrKjfbYywSE",
  authDomain: "netflix-clone-diy.firebaseapp.com",
  projectId: "netflix-clone-diy",
  storageBucket: "netflix-clone-diy.appspot.com",
  messagingSenderId: "837345528089",
  appId: "1:837345528089:web:fc848c86780b0afbbddd88"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth }
export default db