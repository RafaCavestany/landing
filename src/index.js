import React from 'react';
import { render } from 'react-snapshot';

import App from './containers/App';
import './css/index.css';

render(
  <App />,
  document.getElementById('root')
);
