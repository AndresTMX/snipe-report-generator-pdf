import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG)

function useAppFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  return { app, analytics };
}

export { useAppFirebase };