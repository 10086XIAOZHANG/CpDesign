import { useContext } from 'react';
import { FormattedMessage, MessageValue } from 'react-intl';
import { IntlContext } from './IntlContext';

export type FormatMessage = (
  id: FormattedMessage.MessageDescriptor['id'],
  values?: { [key: string]: MessageValue }
) => string;

export const useFormatMessage = () => {
  const { formatMessage } = useContext(IntlContext);

  const formatMessageFn: FormatMessage = (id, values) =>
    formatMessage({ id }, values);

  return formatMessageFn;
};