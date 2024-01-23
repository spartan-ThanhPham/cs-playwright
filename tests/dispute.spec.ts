import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import DisputePage from '../pages/disputePage';


test ('CPS-118 Verify Agent is able to create and resolve an internal dispute', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const disputePage = new DisputePage(page);
    //Navigate to a particular dispute
    await disputePage.goto()
    await loginPage.enterCredential();
    //Verify that internal dispute is created
    await disputePage.raiseInternalDisputeAction();
    //Verrify that the internal dispute is resolved
    await disputePage.resolveInternalDisputeAction();
   
})

test ('CPS-119 Verify Agent is able to create external dispute', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const disputePage = new DisputePage(page);
    //Navigate to a particular dispute
    await disputePage.goto();
    await loginPage.enterCredential();
    //Verify that external dispute is created
    await disputePage.raiseExternalDisputeAction();
    
})
