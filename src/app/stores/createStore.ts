import { History } from 'history';
import { TodoStore } from './modules/TodoStore';
import { DemoStore } from './modules/DemoStore';
import { RouterStore } from './RouterStore';
import { STORE_TODO, STORE_DEMO, STORE_ROUTER } from 'app/constants';

export function createStores(history: History, fixtures?: any) {
  const todoStore = new TodoStore(fixtures.defaultTodos);
  const demoStore = new DemoStore(fixtures.defaultDemos);
  const routerStore = new RouterStore(history);
  return {
    [STORE_TODO]: todoStore,
    [STORE_DEMO]: demoStore,
    [STORE_ROUTER]: routerStore
  };
}
