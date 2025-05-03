import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

// Register user
export async function register(email, password, interests) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    interests,
    quizResults: {},
    savedPrograms: []
  });
}

// Login user
export async function login(email, password) {
  return await signInWithEmailAndPassword(auth, email, password);
}