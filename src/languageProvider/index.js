import Cnlang from "./entries/enCN";
import Hklang from "./entries/enHK";
import {
  addLocaleData
} from "react-intl";

const AppLocale = {
  zh: Cnlang,
  hk: Hklang
};
 //addLocaleData(AppLocale.zh.data);
addLocaleData(AppLocale.hk.data);
export default AppLocale;