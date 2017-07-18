import { OnlineshopAngular2Page } from './app.po';

describe('onlineshop-angular2 App', () => {
  let page: OnlineshopAngular2Page;

  beforeEach(() => {
    page = new OnlineshopAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
