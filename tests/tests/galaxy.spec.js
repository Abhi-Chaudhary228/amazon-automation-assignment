const { test } = require('@playwright/test');

test('Test Case 2 - Galaxy search and add to cart', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  await page.fill('#twotabsearchtextbox', 'Galaxy phone');
  await page.press('#twotabsearchtextbox', 'Enter');

  await page.locator('div[data-component-type="s-search-result"]').first().click();

  const price = await page.locator('span.a-price-whole').first().innerText();
  console.log('Galaxy Price:', price);

  await page.locator('#add-to-cart-button').click();
});
