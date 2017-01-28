export class GamePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('game-app h1')).getText();
  }
}
