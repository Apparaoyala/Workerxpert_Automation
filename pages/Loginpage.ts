import { Page, expect, Locator } from '@playwright/test';

export class Loginpage{

    private readonly page: Page;
    //locators
    private readonly Userid: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    


    //constructor
    constructor(page:Page){

        this.page=page;
        this.Userid =  page.getByTitle('User ID');
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByTitle('Sign In');

        
        //this.txtSearchbox = page.locator('input[placeholder="Search"]');
        //this.btnSearch = page.locator('#search button[type="button"]');

    }

    

 // Click "My Account" link
    async login(users:string,passwords:string,){
        await this.Userid.fill(users);
        await this.password.fill(passwords);
        await this.loginButton.click();
    }
 


}