// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import headerHeight from './modules/headerHeight';
import simpleBar from './modules/simpleBar';
import catalogMenu from './modules/catalogMenu';

documenReady(() => {
  lazyIMages();
  headerHeight();
  simpleBar();
  catalogMenu();
});
