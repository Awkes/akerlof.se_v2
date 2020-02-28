/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import { useState, useRef, useEffect } from 'react';
import { useThemeUI } from 'theme-ui';
import { globalHistory } from '@reach/router';
import InlineSVG from 'svg-inline-react';

const Logo = () => {
  const [deg, setDeg] = useState(720);
  const logo = useRef(null);

  const animateLogo = () => {
    setDeg(deg === 0 ? 720 : 0)
    logo.current.style = `transform: rotate(${deg}deg)`
  }

  useEffect(() => {
    const historyUnsubscribe = globalHistory.listen(() => animateLogo());
    return () => historyUnsubscribe();
  });

  const { theme } = useThemeUI();

  const svgSource = `
    <svg 
      version="1.1" id="Logotyp" xmlns="http://www.w3.org/2000/svg" 
      xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 971.12 971.12" 
      style="enable-background:new 0 0 971.12 971.12;" xml:space="preserve"
    >
      <style type="text/css">
        .st0{fill:none;stroke:${theme.colors.primary};stroke-width:104;stroke-miterlimit:10;}
        .st1{fill:${theme.colors.primary};}
      </style>
      <circle class="st0" cx="485.56" cy="485.56" r="433.56"/>
      <path 
        class="st1" 
        d="M664.47,321.41c10.92-68.53,10.92-103.1,10.92-103.1c-72.78-163.75-327.5-58.22-327.5-58.22
          c4.85,134.03-6.06,154.17-6.06,154.17C131.36,351.38,284.81,433,284.81,433s6.79,3.52,18.73,9.19
          c-48.13,108.91-64.52,275.68-70.02,365.53c9.41-50.59,27.92-116.53,34.12-144.12c0.45,38.44,14.28,150.97,17.8,187.05
          c-0.16-44.93,7.62-208.45,10.28-199.94c3.03,9.7,6.06,207.42,6.06,207.42c-0.44,3.43-2.7,17.09-5.87,35.87h149.44
          c22.75-60.58,41.9-113.14,36.61-113.5c-9.05-0.61-34.01-4.85-45.53-10.92c-11.52-6.06-20.62-30.32-20.62-30.32
          c-31.54-30.93-35.18-60.65-35.18-60.65c-18.62-56.38-24.45-57.62-26.89-88c-0.67-6.62-3.06-24.63-10.71-46.64
          c-10.31-13.95-16.38-29.11-6.31-86.12c10.06-57.01,104.57-85.51,113.06-81.27s68.81,141.11,68.81,141.11s28.84,82.68,28.23,214.29
          c-0.25,54.24-16.78,112.39-36.12,162.02h140.91c21.11-59.07,43.91-121.16,46.84-141.4c6.06-41.85,27.9-9.7,27.9-9.7
          s18.55-144.81-5.71-252.03C831.08,397.41,664.47,321.41,664.47,321.41z"
      />
    </svg>
  `;

  return (
    <Link 
      to="/#home"
    >
      <div
        ref={logo}
        onClick={animateLogo}
        onLoad={animateLogo}
        sx={{
          display: 'block',
          width: '3em',
          transition: 'transform 1s ease-in-out',
          filter: t => `drop-shadow(${t.shadows.darkSmallShadow})`,
          '&>i': { display: 'block', lineHeight: 0 }
        }}
      >
        <InlineSVG src={svgSource} />
      </div>
    </Link>
  );
}

export default Logo;