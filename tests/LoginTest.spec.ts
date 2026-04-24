
import { test, expect,Page  } from '@playwright/test';


import { Loginpage } from '../pages/Loginpage.ts';
import { TestConfig } from '../test.config.ts';
let config: TestConfig;

let loginPage: Loginpage;


// This hook runs before each test
test.beforeEach(async ({ page }) => {
  config = new TestConfig(); // Load config (URL, credentials)
  await page.goto(config.appUrl); // Navigate to base URL

  // Initialize page objects
  loginPage = new Loginpage(page);
});
test('User login test @master @sanity @regression',async()=>{

    //Navigate to Login page via Home page

    
    await loginPage.clickLoginpage(config.UserId,config.password);

    console.log("login successfull")
})
