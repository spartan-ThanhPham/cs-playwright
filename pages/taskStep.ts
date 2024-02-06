import { Page } from "playwright/test";
import { expect } from "@playwright/test";

export default class TaskStep {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    public async goto() {
        await this.page.goto('https://step-out.maintsys.au/insider')
    }
    //Locators
    txtEmail = () => this.page.locator("//input[@placeholder='you@email.com']");
    txtPassword = () => this.page.locator ("//input[@name='password']");
   // btnLogin = () => this.page.getByRole('button', { name: 'Sign in' });
    btnSignin = () => this.page.locator("//button[text()='Sign in']");
    linkTaskStep = () => this.page.locator("//*[contains(text(),'Task Step Table')]");

    //Sucessfully Login
    public async enterCredential() {
        await this.txtEmail().fill('adminstrator@gmail.com');
        await this.txtPassword().fill('123Pa$$word!');
        await this.btnSignin().click();
        setTimeout(() => {
            expect (this.linkTaskStep()).toBeVisible()
        }, 5000);
       // await expect(this.page).toHaveURL('https://step-out.maintsys.au/insider/task-step-table');
    }
    //expect (this.linkTaskstep()).toBeVisible()
    ;
}
