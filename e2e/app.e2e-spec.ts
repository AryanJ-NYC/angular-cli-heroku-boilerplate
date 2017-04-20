import { AngularCliHerokuBoilerplatePage } from './app.po';

describe('angular-cli-heroku-boilerplate App', () => {
  let page: AngularCliHerokuBoilerplatePage;

  beforeEach(() => {
    page = new AngularCliHerokuBoilerplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
