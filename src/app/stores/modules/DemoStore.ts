import { observable, computed, action } from 'mobx';
import { getDemoList } from 'app/services';
import { DemoModel } from 'app/models';

export class DemoStore {
  constructor(fixtures: DemoModel[]) {
    this.demosList = fixtures;
  }

  @observable public demosList: Array<DemoModel>;

  @computed
  get activeTodos() {
    return this.demosList.filter((todo) => !todo.filter);
  }

  @computed
  get completedTodos() {
    return this.demosList.filter((todo) => todo.filter);
  }

  @action
  updateDocument = async () => {
    const demoList = await getDemoList(1);
    console.log(demoList);
  };

  @action
  addTodo = (item: Partial<DemoModel>): void => {
    this.demosList.push(new DemoModel(item.text, item.filter));
  };
  @action
  editTodo = (id: number, data: Partial<DemoModel>): void => {
    this.demosList = this.demosList.map((item) => {
      if (item.id === id) {
        if (typeof data.filter == 'boolean') {
          item.filter = data.filter;
        }
        if (typeof data.text == 'string') {
          item.text = data.text;
        }
      }
      return item;
    });
  };

  @action
  deleteTodo = (id: number): void => {
    this.demosList = this.demosList.filter((item) => item.id !== id);
  };

  @action
  completeAll = (): void => {
    this.demosList = this.demosList.map((item) => ({
      ...item,
      completed: true
    }));
  };

  @action
  clearCompleted = (): void => {
    this.demosList = this.demosList.filter((item) => !item.filter);
  };
}

export default DemoStore;
