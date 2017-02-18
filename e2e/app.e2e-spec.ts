import { Ng2InfocenterPage } from './app.po';

describe('ng2-infocenter App', () => {
  let page: Ng2InfocenterPage;

  beforeEach(() => {
    page = new Ng2InfocenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nic works!');
  });
});
