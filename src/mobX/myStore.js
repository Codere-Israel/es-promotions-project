import { observable, action, makeObservable } from "mobx";

class MyStore {
  type = "todos";

  constructor() {
    makeObservable(this, {
      type: observable,
      updateType: action,
    });
  }
  updateType(newVal) {
    this.type = newVal;
  }
}

const myStore = new MyStore();
export default myStore;
