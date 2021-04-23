import { URLS } from '../urls/';

describe('Wikipedia', () => {
  it("should open wikipedia's home page", async () => {
    await browser.url(URLS.WIKIPEDIA_HOME_PAGE);
    await expect(browser).toHaveTitle('Wikipedia');
  });
});
