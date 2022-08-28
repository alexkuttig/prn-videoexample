describe('Movie selection flow', () => {
  it('should navigate to movie and show movie details', async () => {
    await device.launchApp();

    await expect(element(by.id('testAction'))).toBeVisible();
    await element(by.id('testAction')).tap();

    await expect(element(by.id('testmovie0'))).toBeVisible();
    await element(by.id('testmovie0')).tap();

    await expect(element(by.id('movieoverview'))).toBeVisible();
  });
});
