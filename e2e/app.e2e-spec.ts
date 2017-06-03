import { BullsfirstPage } from './app.po';

describe('bullsfirst App', () => {
  let page: BullsfirstPage;

  beforeEach(() => {
    page = new BullsfirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
