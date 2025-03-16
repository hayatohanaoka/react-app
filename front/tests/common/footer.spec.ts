import { test, expect } from "@playwright/test";

test.describe("ヘッダーのテスト", async () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })

    test("画面にフッターが表示されていること", async ({ page }) => {
        const footer = await page.locator("body > footer");
        await expect(footer).toBeVisible();
    })

    test("ユーザーはページの最下部に「© 2025 diary-app」と表示されていることがわかる", async ({ page }) => {
        const headerText = await page.locator("[data-testid='footer']").innerText();
        await expect(headerText).toBe("© 2025 diary-app");
    })
})
