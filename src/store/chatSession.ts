
// store.js
import { makeAutoObservable } from 'mobx';

class Store {
  // 定义状态
  myChat = [];
  contentIndex = 0

  // 修改状态的方法
  addMyChat = (data) => {
    this.contentIndex++;
    let item = { ...data, index: this.contentIndex }
    if (Array.isArray(this.myChat)) {
      this.myChat = [...this.myChat, item];
    }
  };


  constructor() {
    // 使状态和动作可被 MobX 观察
    makeAutoObservable(this);
  }
}



export const store = new Store();;