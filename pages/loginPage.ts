import { expect, Page } from "playwright/test";
export default class LoginPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    public async goto ()
    {
        await this.page.goto('https://admin-staging.tamara.co/')
    }
    //Locators
    txtEmail = () => this.page.getByPlaceholder('Email');
    txtPassword = () => this.page.getByPlaceholder('Password');
    btnLogin = () => this.page.getByRole('button', {name: 'Login'});
    linkAdminPanel = () => this.page.getByRole('link', {name: 'Admin Panel'});


    //Sucessfully Login
    public async enterCredential() {
        await this.txtEmail().fill('admin@tamarapay.com');
        await this.txtPassword().fill('admin');
        await this.btnLogin().click();
        expect (this.linkAdminPanel()).toBeVisible();
    }
   

}