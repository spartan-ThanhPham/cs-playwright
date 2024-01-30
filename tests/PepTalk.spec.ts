import {test} from "@playwright/test";
import PepTalk from "../pages/PepTalk";


test('test con bot', async ({page}) => {

    const pepTalk = new PepTalk(page);
    await pepTalk.open();
    await pepTalk.chatPep();
})