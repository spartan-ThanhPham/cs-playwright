import {expect, Page} from "@playwright/test"
export default class DisputePage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    public async goto ()
    {
        const orderId = '539d4d55-d0e5-448e-bc82-e83c8b29adb8'
        await this.page.goto(`https://admin-staging.tamara.co/order-management/detail/${orderId}`);
    }
    

    //Locators
    //Tabs
    tabOrderDetails = () => this.page.getByRole('tab', { name: 'Order Details' });
    tabDispute = () => this.page.getByRole('tab', { name: 'Dispute' });
    //Buttons
    btnRaiseDispute = () => this.page.getByRole('button', { name: 'Raise Dispute' });
    btnRaiseSubmit = () => this.page.getByLabel('RAISE A DISPUTE').getByRole('button', { name: 'Raise Dispute' });
    btnResolveDispute = () => this.page.getByRole('button', { name: 'Resolve Dispute' });
    btnUpdateDispute = () => this.page.getByRole('button', { name: 'Update Dispute' });
    btnCloseRaiseDisputePopup = () => this.page.getByRole('button', { name: 'Close' });
    btnSubmit = () => this.page.getByRole('button', { name: 'Submit' });
    btnConfirmSubmit = () => this.page.getByRole('button', { name: 'Submit' }).nth(1);
    //TextBox
    txtPopupTitle = () => this.page.getByText('RAISE A DISPUTE', { exact: true });
    txtDisputeType = () => this.page.getByPlaceholder('Select');
    txtDisputeReason = () => this.page.locator('form div').filter({ hasText: 'Dispute ReasonItem Not' }).getByPlaceholder('Select');
    txtDisputeAmount = () => this.page.getByPlaceholder('Please input amount');
    txtComment = () => this.page.locator('textarea');
    txtAdditionalInfo = () => this.page.getByRole('dialog', { name: 'dialog' }).getByRole('textbox');
    txtStatus = () => this.page.locator('.order-dispute-tab tbody tr td').nth(4).first();

    //Dropdown
    drpTypeOption1 = () => this.page.getByRole('listitem').getByText('Internal');
    drpTypeOption2 = () => this.page.getByRole('listitem').getByText('External');
    drpReasonOption = () => this.page.locator('span').filter({ hasText: 'Item Not Received' });
    
    
    //Raise an internal dispute
    public async raiseInternalDisputeAction () {
        await this.btnRaiseDispute().click();
        await this.txtDisputeType().waitFor({state: "visible"});
        await this.txtDisputeType().click();
        await this.drpTypeOption1().click();
        await this.txtDisputeAmount().fill('20')
        await this.txtComment().fill('raise an internal dispute');
        await this.btnRaiseSubmit().click();
        await this.txtPopupTitle().waitFor({state: "hidden"});
        await this.page.reload();
        await this.tabDispute().waitFor({state: "visible"});
        await this.tabDispute().click(); 
        await expect(this.txtStatus()).toHaveText('Open');
    }

    //Resolve the internal dispute
    public async resolveInternalDisputeAction () {
        await this.txtStatus().click();
        await this.btnResolveDispute().click();
        await this.txtAdditionalInfo().fill('test resolve dispute');
        await this.btnSubmit().click();
        await this.btnConfirmSubmit().click();
        await this.btnConfirmSubmit().waitFor({state: "hidden"});
        await expect(this.txtStatus()).toHaveText('Closed');
        
    }
    
    //Raise an external dispute
    public async raiseExternalDisputeAction () {
        await this.tabOrderDetails().click();
        await this.btnRaiseDispute().click();
        await this.txtDisputeType().waitFor({state: "visible"});
        await this.txtDisputeType().click();
        await this.drpTypeOption2().click();
        await this.txtDisputeReason().click();
        await this.drpReasonOption().click();
        await this.txtDisputeAmount().fill('20')
        await this.txtComment().fill('raise an external dispute');
        await this.btnRaiseSubmit().click();
        await this.txtPopupTitle().waitFor({state: "hidden"});
        await this.page.reload();
        await this.tabDispute().waitFor({state: "visible"});
        await this.tabDispute().click(); 
        await expect(this.txtStatus()).toHaveText('Awaiting Merchant Response');
    }

}