import { test, expect } from '@playwright/test';
test.describe("top page test", () => {
  test("top page test", async ({ page }) => {
    await page.goto("/");
    const title = await page.locator("div nav p");
    const targetText = await title.innerText();
    expect(targetText).toBe("What's next?")
  })
})
