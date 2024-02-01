import {Page} from "playwright/test";
import {expect} from "@playwright/test";

export default class PepTalk {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    txtChat = () => this.page.locator("div.chat-input textarea");
    //(//div[div[contains(@class, 'chat-message-text') and normalize-space(text())='Thanh846593285@gmail.com and 846593285']]/preceding-sibling::div)
    // lblMessage = (msg: string) => this.page.locator(`//div[contains(@class, 'chat-message-text') and normalize-space(text())='${msg}']`)
    lblMessage = (msg: string) => this.page.locator(`//div[div[contains(@class, 'chat-message-text') and normalize-space(text())='${msg}']]/preceding-sibling::div[contains(@class, 'chat-message-received')]`);
    ////div[div[contains(@class, 'chat-message-text') and normalize-space(text())='Max 5000']]/preceding-sibling::div[contains(@class, 'chat-message-received')]
    lblChatMessage = () => this.page.locator("div.chat-message");
    btnSubmit = () => this.page.locator("button.chat-input-submit");

    public async open() {
        await this.page.goto('http://peptalk-ai-fe-dev.s3-website.eu-west-2.amazonaws.com/');
    }
    public async chatPep() {
        const chat = 'hi';
        const chat1 = 'I am looking for someone to talk about International Women s Day';
        const chat2 = 'Online session please';
        const chat3 = 'Max 5000';
        const chat4 = 'Please show me additional experts';
        const chat5 = 'I am interested in expert-level information of Tamara Gillan. Can you delve deeper into the details?';
        const chat6 = 'which session she can talk about ?';
        const chat7 = 'I am looking for a woman with a story of overcoming challenges';
        const chat8 = 'ABCD123'
        const chat9 = 'Can you show me experts with budget around 4000';
        const chat10 = 'I want to find an Olympian Expert in Game 2024';
        const chat11 = 'Can you tell me about Kate Richardson-Walsh OBE';
        const chat12 = 'How about Victoria Pendleton CBE?';
        const chat13 = 'I would like to book Richardson-Walsh OBE';
        const chat14 = 'Thanh846593285@gmail.com and 846593285';

        await this.txtChat().fill(chat);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(2);
        await expect(this.lblMessage(chat)).toBeVisible();
        await this.txtChat().fill(chat1);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(3);
        await expect(this.lblMessage(chat1)).toBeVisible();
        await this.txtChat().fill(chat2);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(4);
        await expect(this.lblMessage(chat2)).toBeVisible();
        await this.txtChat().fill(chat3);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(6);
        await expect(this.lblMessage(chat3).last()).toBeVisible();
        await this.txtChat().fill(chat4);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(8);
        await expect(this.lblMessage(chat4).last()).toBeVisible();
        await this.txtChat().fill(chat5);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat5)).toBeVisible();
        await this.txtChat().fill(chat6);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(10);
        await expect(this.lblMessage(chat6)).toBeVisible();
        await this.txtChat().fill(chat7);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat7).last()).toBeVisible();
        await this.txtChat().fill(chat8);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat8)).toBeVisible();
        await this.txtChat().fill(chat9);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(11);
        await expect(this.lblMessage(chat9).last()).toBeVisible();
        await this.txtChat().fill(chat10);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(12);
        await expect(this.lblMessage(chat10).last()).toBeVisible();
        await this.txtChat().fill(chat11);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(13);
        await expect(this.lblMessage(chat11)).toBeVisible();
        await this.txtChat().fill(chat12);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(14);
        await expect(this.lblMessage(chat12)).toBeVisible();
        await this.txtChat().fill(chat13);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(15);
        await expect(this.lblMessage(chat13)).toBeVisible();
        await this.txtChat().fill(chat14);
        await this.page.waitForTimeout(500);
        await this.page.keyboard.press('Enter');
        // await expect(this.lblChatMessage()).toHaveCount(16);
        await expect(this.lblMessage(chat14)).toBeVisible();
    }
}