// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import headerHeight from './modules/headerHeight';
import simpleBar from './modules/simpleBar';
import catalogMenu from './modules/catalogMenu';
import catalogHoverMenus from './modules/catalogHoverMenus';
import popupOpen from './modules/popupOpen';
import initModal from './modules/initModal';
import initHightlight from './modules/initHightlight';

documenReady(() => {
  window.medikamarket_API = {};

  lazyIMages();
  headerHeight();
  simpleBar();
  catalogMenu();
  catalogHoverMenus();
  popupOpen();
  initModal();
  initHightlight();
});
