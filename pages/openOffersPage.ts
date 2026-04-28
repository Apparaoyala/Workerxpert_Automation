import{Page,expect,Locator} from "@playwright/test"
export class OpenOffersPage{

private readonly page: Page;
    //locators
    private readonly Menu: Locator;
    private readonly OpenOffersL: Locator;
    private readonly filter: Locator;
    private readonly evntNumber:Locator;
    private readonly go:Locator;
    private readonly Req:Locator;

    constructor(page:Page){
     
    
            this.page=page;
           // await page.locator('i.fa.fa-bar').waitFor();
            this.Menu = page.locator('i.fa.fa-bars:visible')
            this.OpenOffersL =  page.locator('i.fa.fa-sliders')
            

            
            this.filter =page.locator('i.fa.fa-filter');
            //this.loginButton = page.getByTitle('Sign In');
            this.evntNumber=page.locator('#eventid');
            this.go=page.getByRole('button', { name: 'Apply' });
            const of=page.getByTitle('Open Offers');

        this.Req=page.locator('a').filter({ hasText: 'Request' }).first()
    
        }

        async openOffers1(){
        
        await this.Menu.click();
        await this.OpenOffersL.click();
        
        }

        async openOffers2(){

            await this.filter.click();
        await this.evntNumber.fill("2519");
        await this.go.click();
        await this.Req.click();

        }


}