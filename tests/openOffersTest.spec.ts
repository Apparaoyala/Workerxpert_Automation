import { test, expect,Page  } from '@playwright/test';


import { OpenOffersPage } from '../pages/openOffersPage';
import { TestConfig } from '../test.config.ts';
let config: TestConfig;

//let openOffers: openOffersPage;

test('openOffersTest',async({page})=>{
const config = new TestConfig();
    //Navigate to Login page via Home page
await page.goto(config.homeUrl);
const openOffers = new OpenOffersPage(page)
await openOffers.openOffers1()

await openOffers.filters()
await openOffers.openOffers3()
    console.log("open offers screen is working fine")
})
/*
test('openOffersFilter',async({page})=>{
//const config = new TestConfig();
    //Navigate to Login page via Home page
//await page.goto(config.homeUrl);
const openOffers = new OpenOffersPage(page)
await openOffers.openOffers1()

    console.log("open offers screen is working fine")
})
*/
