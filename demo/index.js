import React from 'react';
import { render} from 'react-dom';
import QrCode from '../src';

const App = () => (
  <QrCode
    data="https://github.com/dral/qrcode-component.git"
    height="300"
    width="300"
    fgColor="#A1B2C3"
    bgColor="#123456"
  />
);

render(<App />, document.getElementById('root'));
