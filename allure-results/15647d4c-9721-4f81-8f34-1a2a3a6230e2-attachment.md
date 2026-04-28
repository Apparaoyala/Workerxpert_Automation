# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: openOffersTest.spec.ts >> openOffersTest
- Location: tests\openOffersTest.spec.ts:10:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByTitle('WorkerXpert')

```

# Test source

```ts
  1  | import{Page,expect,Locator} from "@playwright/test"
  2  | export class OpenOffersPage{
  3  | 
  4  | private readonly page: Page;
  5  |     //locators
  6  |     private readonly Menu: Locator;
  7  |     private readonly OpenOffersL: Locator;
  8  |     private readonly filter: Locator;
  9  |     private readonly evntNumber:Locator;
  10 |     private readonly go:Locator;
  11 | 
  12 | 
  13 |     constructor(page:Page){
  14 |     
  15 |             this.page=page;
  16 |             this.Menu =  page.getByTitle('WorkerXpert');
  17 |             this.OpenOffersL =  page.getByTitle('Open Offers');
  18 |             this.filter =page.locator('i.fa.fa-filter');
  19 |             //this.loginButton = page.getByTitle('Sign In');
  20 |             this.evntNumber=page.locator('#eventid');
  21 |             this.go=page.getByRole('button', { name: 'Apply' });
  22 |             const of=page.getByTitle('Open Offers');
  23 | 
  24 |         
  25 |     
  26 |         }
  27 | 
  28 |         async openOffers1(){
  29 |         
> 30 |         await this.Menu.click();
     |                         ^ Error: locator.click: Target page, context or browser has been closed
  31 |         await this.OpenOffersL.click();
  32 |         await this.filter.click();
  33 |         await this.evntNumber.fill("1234");
  34 |         await this.go.click();
  35 | 
  36 |     }
  37 | 
  38 | 
  39 | }
```