import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
  test('homepage lists posts', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Getting Started with Remix' })).toBeVisible();
  });

  test('filter posts by tag', async ({ page }) => {
    await page.goto('/');
    await page.locator('nav').getByText('remix').click();
    await expect(page.getByRole('link', { name: 'Getting Started with Remix' })).toBeVisible();
  });

  test('open post details', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Getting Started with Remix' }).click();
    await expect(page.locator('h1')).toHaveText('TechBlog');
  });
});
