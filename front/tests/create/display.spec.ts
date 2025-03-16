import test, { expect } from "@playwright/test";

test.describe("新規作成ページのテスト", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/create");
    })

    test("ユーザーは日記を新規作成するページであることがわかる", async ({ page }) => {
        const titleText = await page.locator("h2").innerText();
        await expect(titleText).toBe("新規作成");
    })

    test("ユーザーは日記のタイトルを入力することができる", async ({ page }) => {
        const target = await page.locator("form input[data-testid='title']");
        await expect(target).toBeVisible();
        await expect(target).toBeEditable();
    })

    test("ユーザーは日記の日付（YYYY-MM-DD）を入力することができる", async ({ page }) => {
        const target = await page.locator("form input[data-testid='date']");
        await expect(target).toBeVisible();
        await expect(target).toBeEditable();
    })

    test("ユーザーは日記の本文を入力することができる", async ({ page }) => {
        const target = await page.locator("form textarea[data-testid='main']");
        await expect(target).toBeVisible();
        await expect(target).toBeEditable();
    })

    test("ユーザーは入力内容をボタンを押して送信することができる", async ({ page }) => {
        const target = await page.locator("form button[data-testid='submit-button']");
        await expect(target).toBeVisible();
        await expect(target).toBeEnabled();
    })
    
    test("ユーザーはトップページに遷移することができる", async ({ page }) => {
        const target = await page.locator("a[data-testid='top-page']");
        const targetText = await target.innerText();
        const targetHref = await target.getAttribute("href");
    
        await expect(targetText).toBe("トップ");
        await expect(targetHref).toBe("/");
    })
    
    test("ユーザーはトップページに遷移するリンクを見ることができる", async ({ page }) => {
        const target = await page.locator("a[data-testid='top-page']");
        const targetText = await target.innerText();
        const targetHref = await target.getAttribute("href");
    
        await expect(targetText).toBe("トップ");
        await expect(targetHref).toBe("/");
    })

    test("ユーザーは日記一覧ページに遷移するリンクを見ることができる", async({ page }) => {
        const target = await page.locator("a[data-testid='show-diaries']")
        const targetText = await target.innerText();
        const targetHref = await target.getAttribute("href");
    
        await expect(targetText).toBe("一覧");
        await expect(targetHref).toBe("/show");
    })
    
})
