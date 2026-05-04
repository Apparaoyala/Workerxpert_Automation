import { test, expect,Page  } from '@playwright/test';


import { OpenOffersPage } from '../pages/openOffersPage';
import { TestConfig } from '../test.config.ts';
let config: TestConfig;

//let openOffers: openOffersPage;

test('offerlist',async({page})=>{
const config = new TestConfig();
    //Navigate to Login page via Home page
await page.goto(config.homeUrl);
const openOffers = new OpenOffersPage(page)


await openOffers.filters()


        console.log("offerlist is working")
})



