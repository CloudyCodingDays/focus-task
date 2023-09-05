import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://focus-task-app.vercel.app/");
  await page.getByRole("link", { name: "Find Task" }).click();
  await page.locator("div:nth-child(2) > div > .rounded-lg").click();
  await page.getByPlaceholder("Task Name...").click();
  await page.getByPlaceholder("Task Name...").fill("Test");
  await page.getByRole("button", { name: "Add Task" }).click();
  await page.getByText("12", { exact: true }).click();
  await page.getByRole("button", { name: "Test" }).click();
  await page.getByRole("button", { name: "Assign Task" }).click();
  await expect(page.getByRole("button", { name: "Complete" })).toBeVisible();
});
