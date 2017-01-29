import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GameAppComponent } from '../app/game.component';

beforeEachProviders(() => [GameAppComponent]);

describe('App: Game', () => {
  it('should create the app',
      inject([GameAppComponent], (app: GameAppComponent) => {
    expect(app).toBeTruthy();
  }));

  //it('should have as title \'game works!\'',
  //    inject([GameAppComponent], (app: GameAppComponent) => {
  // expect(app.title).toEqual('game works!');
  //}));
});
