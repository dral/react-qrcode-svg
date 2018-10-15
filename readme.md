# React svg qrcode component

Install:
```sh
npm install react-qrcode-svg
```

Import:
```js
import QrCode from 'react-qrcode-svg';
```

Use:
```js
const App = () => (
  <QrCode
    data="https://github.com/dral/qrcode-component.git"
    height="300"
    width="300"
    fgColor="#A1B2C3"
    bgColor="#123456"
  />
);
```

## Options

- `data`: the data to encode
- `ecLevel`: Error correction level, any of `L`, `M`, `Q`, `H` (default 'L');
- `fgColor`: Foreground color (default: `#000`)
- `bgColor`: Background color (default: `#FFF`)
- `margin`: Margin or _quiet zone_ arround code in number of modules (default `4`).
- other: Any other properties (`height`, `width`, …) will be passed to the underlying `svg` component.
