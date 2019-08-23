import { observable } from 'mobx';

export class DemoModel {
  readonly id: number;
  @observable public text: string;
  @observable public filter: boolean;
  constructor(text: string, filter: boolean = false) {
    this.id = DemoModel.generateId();
    this.text = text;
    this.filter = filter;
  }

  static nextId = 1;
  static generateId() {
    return this.nextId++;
  }
}

export default DemoModel;
