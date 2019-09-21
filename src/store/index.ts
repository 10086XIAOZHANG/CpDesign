import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducers from '@/store/reducers';
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const reducersCells = combineReducers(reducers) as any;

export const rootReducer = persistReducer(persistConfig, reducersCells);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  const persistor = persistStore(store);
  return { store, persistor };
}
