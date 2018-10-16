import React from 'react';
import { render} from 'react-dom';
import QrCode from '../src';

const App = () => (
  <QrCode
    data="https://github.com/dral/react-qrcode-svg"
    height="300"
    width="300"
    fgColor="url(#gradientFill)"
  >
    <linearGradient id="gradientFill" x1="0" y1="0" x2="1" y2=".7">
      <stop offset="0%" stopColor="#f857a6"/>
      <stop offset="100%" stopColor="#ff5858"/>
    </linearGradient>
  </QrCode>
);

render(<App />, document.getElementById('root'));
