import { ZkztPage } from './app.po';

describe('zkzt App', function() {
  let page: ZkztPage;

  beforeEach(() => {
    page = new ZkztPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
