import { observable, action, when, autorun, makeAutoObservable } from "mobx";

class Store {
  count = 0;
  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };
  constructor() {
    makeAutoObservable(this, {
      count: observable,
      increment: action.bound,
      decrement: action.bound,
    });
  }
}
export const appStore = new Store();
when(
  () => appStore.count > 5,
  () => {
    alert("Count value is more than 5");
  }
);
autorun(
  () => {
    alert(`Count value is: ${appStore.count}`);
  },
  {
    name: "Custom autorun",
    delay: 3000,
  }
);
