import React from 'react';
import { InjectedIntl } from 'react-intl';

export const IntlContext = React.createContext<InjectedIntl>(
  {} as InjectedIntl
);