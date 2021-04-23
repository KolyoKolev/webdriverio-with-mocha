import { URLS } from '../urls';
import { HEROUAPP_LOGIN_PAGE } from '../selectors';

describe('My Login application', () => {
  it('should login with valid credentials', async () => {
    await browser.url(URLS.HEROKUAPP_LOGIN_PAGE);

    await (await $(HEROUAPP_LOGIN_PAGE.USERNAME_FIELD)).setValue(
      HEROUAPP_LOGIN_PAGE.USERNAME_VALUE
    );
    await (await $(HEROUAPP_LOGIN_PAGE.PASSWORD_FIELD)).setValue(
      HEROUAPP_LOGIN_PAGE.PASSWORD_VALUE
    );
    await (await $(HEROUAPP_LOGIN_PAGE.SUBMIT_BTN)).click();

    await expect($(HEROUAPP_LOGIN_PAGE.FLASH)).toBeExisting();
    await expect($(HEROUAPP_LOGIN_PAGE.FLASH)).toHaveTextContaining(
      HEROUAPP_LOGIN_PAGE.FLASH_TEXT
    );
  });
});
