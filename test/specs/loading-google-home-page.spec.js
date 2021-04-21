describe('Google', () => {
  it("should open google's home page ", async () => {
    await browser.url(`https://google.com`);
    await expect(browser).toHaveTitle('Google');
  });
});
