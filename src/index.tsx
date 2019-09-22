import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './app';
ReactDOM.render(<App />, document.getElementById('root'));
console.log('process.env.NODE_ENV',process.env.NODE_ENV)
if ('production' === process.env.NODE_ENV) {
    serviceWorker.register();
} else {
    serviceWorker.unregister();
}
