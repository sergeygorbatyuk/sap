import { MainMenu } from './main.menu';
import { MainPage } from './main.page';
import { initSingleton } from './init.singleton';
import { EsgKPIEnginePage } from './esg.kpi.engine.page';
import { ContactPage } from './contact.page';

function pageProvider(page) {
  return {
      mainMenu: initSingleton(MainMenu, page),
      mainPage: initSingleton(MainPage, page),
      esgKPIEnginePage: initSingleton(EsgKPIEnginePage, page),
      contactPage: initSingleton(ContactPage, page)
  }
}

export { pageProvider };
