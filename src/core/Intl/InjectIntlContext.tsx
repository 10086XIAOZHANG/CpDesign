  
import React from 'react';
import { injectIntl } from 'react-intl';
import { IntlContext } from './IntlContext';

export const InjectIntlContext = injectIntl(({ intl, children }) => (
  <IntlContext.Provider value={intl}>{children}</IntlContext.Provider>
));