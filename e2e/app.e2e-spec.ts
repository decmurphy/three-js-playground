import { ThreeJsPlaygroundPage } from './app.po';

describe('three-js-playground App', () => {
  let page: ThreeJsPlaygroundPage;

  beforeEach(() => {
    page = new ThreeJsPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
