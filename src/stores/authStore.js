import { defineStore } from "pinia";
import { auth } from "../config/firebaseconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const useAuthStore = defineStore("storeAuth", {
  state: () => ({
    user: {},
    login: true,
  }),
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.login = true;
        } else {
          this.user = {};
          this.login = false;
        }
      });
    },
    registerUser(user) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log(error);
          // ..
        });
    },
    LogoutUser() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    },
    LoginUser(user) {
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          this.login = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
