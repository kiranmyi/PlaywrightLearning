import{chromium,test} from "@playwright/test"
import { channel } from "diagnostics_channel";
test("Test Login Functionality",async()=>
{
    const chromeBrowser=await chromium.launch({channel:"chrome",headless:false});
    const edgeBrowser=await chromium.launch({channel:"msedge",headless:false});
    
    const chromeContext=await chromeBrowser.newContext();
    const edgeContext=await edgeBrowser.newContext();

    const page=await chromeContext.newPage();
    page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("pkgirajala@testleaf.com");
    await page.locator("#password").fill("Vivek123#");
    await  page.locator('#Login').click();
    await page.waitForTimeout(10000);
    const title=await page.title();
    console.log(`Title of the page is ${title}`);
    const url=await page.url();
    console.log("Url : "+url);
    page.close();


    
    

})