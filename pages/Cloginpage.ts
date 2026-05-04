import{expect,Locator,Page} from '@playwright/test';

export class cloginpage{

private   page:Page;

private readonly cCaterId :Locator;
private readonly cUserId :Locator;
private readonly cpassword :Locator;

private readonly goBtn:Locator;
private readonly cUrl:any;

constructor(page:Page){

        this.page=page;
    //this.cUrl='https://catapps.aquilasoftware.com/CaterXpert.action'
    this.cCaterId= page.locator('#CatererId')
    this.cUserId= page.locator('#UserName')
    this.cpassword= page.locator('#Password')
    this.goBtn= page.locator('input[type="image"]')
}

async url(){
    this.cUrl.click();
}
async clickLogin(){

this.cCaterId.fill("caterxpertcat");
this.cUserId.fill("superadmin");
this.cpassword.fill("(@t$np3r2026^")

//this.goBtn.click();

}

}

