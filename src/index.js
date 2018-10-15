import React from 'react';
import qr from 'qr-image';

const QrCodeSvg = (data, ecLevel) => {
  const code = qr.svgObject(data, {
    ec_level: ecLevel,
    type: 'svg',
    parse_url: true,
    size: 1,
    margin: 0
  });
  return code ;
};

const QrCode = ({
  data = '',
  ecLevel = 'L',
  bgColor = '#FFF',
  fgColor = '#000',
  margin = 4,
  ...props
}) => {
  const size = qr.matrix(data, ecLevel).length;
  const boxOffset = -margin;
  const boxSize = size + 2 * margin;
  const viewBox = `${boxOffset} ${boxOffset} ${boxSize} ${boxSize}`;
  return (
    <svg {...props} viewBox={viewBox}>
      <rect
        x={boxOffset}
        y={boxOffset}
        width={boxSize}
        height={boxSize}
        fill={bgColor}
      />
      <path
        d={ QrCodeSvg(data, ecLevel).path }
        fill={fgColor}
      />
    </svg>
  );
};

export default QrCode;
