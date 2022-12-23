

import ThemeProvider from 'providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faMoon,
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
  faSun,
  faMoon,
  faList,
  faBorderAll,
  faSortNumericDown,
  faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/magula.css';
import "react-toggle/style.css"
import 'styles/index.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default function App({Component, pageProps}) {
  return (<ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>)
}