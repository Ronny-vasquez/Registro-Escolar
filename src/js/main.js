import "../app/signupForm.js";
import "../app/logout.js";
import "../app/signinForm.js";
import { loginCheck } from "../app/loginCheck.js";
import { Auth, db } from "../app/Firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { setupPosts } from "../app/postList.js";

onAuthStateChanged(Auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, "final"));
    setupPosts(querySnapshot.docs);
  } else {
    setupPosts([]);
  }

  loginCheck(user);
});
