import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

function useAppFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  
  return { app, analytics, db };
}

export { useAppFirebase };