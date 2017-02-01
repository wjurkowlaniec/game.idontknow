import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ShrinkGameAppComponent } from '../app/shrink-game.component';

beforeEachProviders(() => [ShrinkGameAppComponent]);

describe('App: ShrinkGame', () => {
  it('should create the app',
      inject([ShrinkGameAppComponent], (app: ShrinkGameAppComponent) => {
    expect(app).toBeTruthy();
  }));

  // it('should have as title \'shrink-game works!\'',
      // inject([ShrinkGameAppComponent], (app: ShrinkGameAppComponent) => {
    // expect(app.title).toEqual('shrink-game works!');
  // }));
});
