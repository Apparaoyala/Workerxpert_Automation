import{test,expect}from '@playwright/test';

import { cloginpage } from '../pages/Cloginpage';

test('login test',async({page})=>{

const clogin = new cloginpage(page);
await page.goto("https://catapps.aquilasoftware.com/CaterXpert.action")

clogin.clickLogin();
console.log("test pass")
await page.pause();
})