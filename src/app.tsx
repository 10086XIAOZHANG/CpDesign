import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Layouts from "../src/layouts";
import configureStore from "@/store";
import './utils/global'
import "./global.less";

const App: React.FC = (): React.ReactElement => {
  return (
    <div className="app">
      <BrowserRouter>
        <Provider
          store={
            configureStore()
          }
        >
          <Layouts />
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
