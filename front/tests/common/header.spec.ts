import { test, expect } from "@playwright/test";

test.describe("ヘッダーのテスト", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })

    test("画面にヘッダーが表示されていること", async ({ page }) => {
        const footer = await page.locator("body > header");
        await expect(footer).toBeVisible();
    })

    test("ユーザーはページの最上部に「日記帳」と表示されていることがわかる", async ({ page }) => {
        const headerText = await page.locator("header > [data-testid='header']").innerText();
        await expect(headerText).toBe("日記帳");
    })
})
