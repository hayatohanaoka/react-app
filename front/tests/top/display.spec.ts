import { test, expect } from '@playwright/test';

test.describe("トップページのテスト", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  })

  test("ユーザーはトップページであることがわかる", async ({ page }) => {
    const titleText = await page.locator("h2").innerText();
    await expect(titleText).toBe("トップ");
  })

  test("ユーザーは日記作成ページに遷移するリンクを見ることができる", async({ page }) => {
    const target = await page.locator("a[data-testid='create-diary']")
    const targetText = await target.innerText();
    const targetHref = await target.getAttribute("href");

    await expect(targetText).toBe("新規作成");
    await expect(targetHref).toBe("/create");
  })

  test("ユーザーは日記一覧ページに遷移するリンクを見ることができる", async({ page }) => {
    const target = await page.locator("a[data-testid='show-diaries']")
    const targetText = await target.innerText();
    const targetHref = await target.getAttribute("href");

    await expect(targetText).toBe("一覧");
    await expect(targetHref).toBe("/show");
  })

})
