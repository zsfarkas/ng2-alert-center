import { browser, element, by } from 'protractor';

export class Ng2InfocenterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nic-root h1')).getText();
  }
}
