import { CricketClubPage } from './app.po';

describe('cricket-club App', () => {
  let page: CricketClubPage;

  beforeEach(() => {
    page = new CricketClubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
