import { browser, by, element } from 'protractor';

export class Ng4StarterKitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('my-root h1')).getText();
  }
}
