export class ShrinkGamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('shrink-game-app h1')).getText();
  }
}
