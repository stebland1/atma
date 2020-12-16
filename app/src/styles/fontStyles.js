import { createGlobalStyle } from 'styled-components';
import IconFont from '../assets/fonts/icomoon.woff';
import MainFont from '../assets/fonts/self-modern.woff';

const fontStyle = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${IconFont});
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'self-modern';
    src:  url(${MainFont});
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    font-size: 1.6rem;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-login:before {
    content: "\\e900";
  }

  .icon-basket:before {
    content: "\\e902"
  }

  .icon-lotus:before {
    content: "\\e901"
  }
`;

export default fontStyle;
