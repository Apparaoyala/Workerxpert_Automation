import { test as setup } from '@playwright/test';
import { Loginpage } from '../pages/Loginpage';
import { TestConfig } from '../test.config';

const config = new TestConfig();

setup('authenticate', async ({ page }) => {

    const loginPage = new Loginpage(page);

    await page.goto(config.appUrl);

    await loginPage.login(
        config.UserId,
        config.password
    );
     await page.waitForLoadState('networkidle');

    // OR wait for dashboard element
    await page.locator('#headerTitle').waitFor();
    await page.context().storageState({
        path: 'playwright/.auth/user.json'
    });
});