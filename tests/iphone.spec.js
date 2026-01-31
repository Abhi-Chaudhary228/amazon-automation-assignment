const { test } = require('@playwright/test');

test('Test Case 1 - iPhone search and add to cart', async ({ page }) => {
  await page.goto('https://www.amazon.com');

  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.press('#twotabsearchtextbox', 'Enter');

  await page.locator('div[data-component-type="s-search-result"]').first().click();

  const price = await page.locator('span.a-price-whole').first().innerText();
  console.log('iPhone Price:', price);

  await page.locator('#add-to-cart-button').click();
});
