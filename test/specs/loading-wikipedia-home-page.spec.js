describe('Wikipedia', () => {
  it("should open wikipedia's home page", async () => {
    await browser.url(`https://wikipedia.com`);
    await expect(browser).toHaveTitle('Wikipedia');
  });
});
