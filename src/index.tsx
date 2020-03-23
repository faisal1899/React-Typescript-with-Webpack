import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components/App';

ReactDOM.render(
  <App appName={'This is my app'} appId={345}/>,
  document.getElementById('root')
);