import { test, expect } from '@playwright/test';

test.describe("トップページのテスト", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test("ユーザーはトップページにhello,worldを見ることができる", async({ page }) => {
    const targetText = await page.locator("[data-testid='hello']").innerText();
    expect(targetText).toBe("hello,world");
  })
})
