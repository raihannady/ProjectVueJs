import { defineStore } from "pinia";
import { db, timestamp } from "../config/firebaseconfig";
import {
  collection,
  addDoc,
  orderBy,
  onSnapshot,
  query,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export const useCounterStore = defineStore("todo", {
  state: () => ({
    title: "",
    content: "",
    datas: [],
    id: "",
    update: false,
  }),
  actions: {
    clearInput() {
      this.title = "";
      this.content = "";
      this.update = false;
    },
    updateData(data) {
      this.update = true;
      this.title = data.title;
      this.content = data.content;
      this.id = data.id;
    },
    async deleteData(dataId) {
      this.clearInput();
      await deleteDoc(doc(db, "todos", dataId));
    },
    readData() {
      const filter = query(collection(db, "todos"), orderBy("createAt", "asc"));
      onSnapshot(filter, (querySnapshot) => {
        const todos = [];
        querySnapshot.forEach((doc) => {
          let todo = {
            id: doc.id,
            title: doc.data().title,
            content: doc.data().content,
          };
          todos.push(todo);
        });
        this.datas = todos;
      });
    },
    async handleSubmit(data) {
      if (this.update) {
        const id = this.id;
        await updateDoc(doc(db, "todos", id), {
          title: this.title,
          content: this.content,
          updateAt: timestamp,
        });
      } else {
        await addDoc(collection(db, "todos"), {
          title: this.title,
          content: this.content,
          createAt: timestamp,
          updateAt: timestamp,
        });
      }

      this.clearInput();
      this.readData();
    },
  },
});
