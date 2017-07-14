import { WataPage } from './app.po';

describe('wata App', () => {
  let page: WataPage;

  beforeEach(() => {
    page = new WataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
