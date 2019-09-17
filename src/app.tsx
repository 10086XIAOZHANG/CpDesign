import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layouts from '../src/layouts';
import configureStore from '@/store';

import { PersistGate } from 'redux-persist/lib/integration/react';

import './utils/global';
import './global.less';

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider store={configureStore().store}>
          <PersistGate loading={null} persistor={configureStore().persistor}>
            <Layouts />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
