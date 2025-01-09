import { resumeConfig } from '@config/resume-config';
import { Path, Svg } from '@react-pdf/renderer';
import { ReactNode } from 'react';
import { PdfIconProperties } from 'src/components/pdf/icons/pdf-icon';
import { getNeutralColor } from 'src/helpers/colors';

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export default function CirclePaintbrush({
  size,
}: PdfIconProperties): ReactNode {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M0,256C-0,115.563 115.563,0 256,0C396.437,-0 512,115.563 512,256C512,396.437 396.437,512 256,512C115.563,512 0,396.437 0,256ZM277.751,324.341C294.542,321.942 309.672,312.409 319.082,297.955L418.534,144.134C426.283,132.141 424.315,116.273 413.86,106.494C403.404,96.715 387.474,95.854 376.035,104.464L230.455,213.695C215.694,224.766 206.961,242.048 206.837,260.5L277.751,324.341ZM265.697,339.963L194.352,275.753C157.573,277.106 128.112,307.427 128.112,344.575C128.112,346.974 128.236,349.373 128.482,351.71C129.589,362.473 122.208,374.097 111.383,374.097L108.431,374.097C97.545,374.097 88.75,382.892 88.75,393.778C88.75,404.665 97.545,413.46 108.431,413.46L196.997,413.46C235.068,413.46 265.881,382.646 265.881,344.575C265.881,343.038 265.82,341.5 265.758,339.963L265.697,339.963Z"
      />
    </Svg>
  );
}
