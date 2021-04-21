import { URLS } from '../pages/';

describe('Google', () => {
  it("should open google's home page ", async () => {
    await browser.url(URLS.GOOGLE_HOME_PAGE);
    await expect(browser).toHaveTitle('Google');
  });
});
