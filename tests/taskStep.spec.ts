import {test} from "@playwright/test";
import TaskStep from "../pages/taskStep";


test('Login taskstep', async ({page}) => {

    const taskStep = new TaskStep(page);
    await taskStep.goto();
    await taskStep.enterCredential();
})