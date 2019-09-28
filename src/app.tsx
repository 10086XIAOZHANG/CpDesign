import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layouts from '../src/layouts';
import configureStore from '@/store';
import { IntlProvider } from "react-intl";
import { PersistGate } from 'redux-persist/lib/integration/react';
import {InjectIntlContext} from '@/core/Intl/index'
import AppLocale from "@/languageProvider/index";
import { language, localeLang as intlLocaleLang } from '@/core/Intl';
import './utils/global';
import './global.less';
interface ILang{
  lang:string;
  localeLang:string;
}
const App: React.FC = (): React.ReactElement => {

  const getLanguage=():ILang=> {
    (window as any).LANG =  'cn';
    switch ( (window as any).LANG) {
        case 'hk':
            return { lang:  (window as any).LANG, localeLang: `zh-${ (window as any).LANG.toLowerCase()}` }
        default:
            return { lang: language, localeLang: intlLocaleLang }
    }
}
const { lang, localeLang } = getLanguage()
const currentAppLocale = AppLocale[lang];
  return (
    <div className="app">
    <IntlProvider locale={localeLang} messages={currentAppLocale.messages}>
    <InjectIntlContext>
      <BrowserRouter>
        <Provider store={configureStore().store}>
          <PersistGate loading={null} persistor={configureStore().persistor}>
            <Layouts />
          </PersistGate>
        </Provider>
      </BrowserRouter>
      </InjectIntlContext>
      </IntlProvider>
    </div>
  );
};

export default App;
