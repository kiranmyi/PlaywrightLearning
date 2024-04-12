import { chromium, expect, test,Page } from "@playwright/test";
import { setTimeout } from "timers/promises";

test("Learning fixtures", async ({page}) =>{

    //Launch the browser
    //Create a context
    //Create a page

    await page.goto("http://leaftaps.com/opentaps/control/main");
     //Enter the username
     await page.fill("#username", "demosalesmanager");
   
     //Enter the password
     await page.fill("[name='PASSWORD']", "crmsfa");
 
     //Click Login
     await page.click(".decorativeSubmit");
   


})


test('Test to create a new lead', async () => {


    //Create a browser instance
    const browser = await chromium.launch({channel:"msedge",headless:false});


    //Create a browser context
    const browserContext = await browser.newContext();


    //Create a new page
    const page = await browserContext.newPage();


    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");


    //Enter the username
    await page.fill("#username", "demosalesmanager");
   
    //Enter the password
    await page.fill("[name='PASSWORD']", "crmsfa");

    //Click Login
    await page.click(".decorativeSubmit");


    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();


    //Click Leads
    await page.click("text=Leads", {timeout:10000});


    //Click Create Lead
    await page.click("text=Create Lead", {timeout:10000});


    await page.waitForLoadState("load");


    //Enter company name
    const companyName="Testleaf";
    await page.locator("#createLeadForm_companyName").fill(companyName);


    //Enter first name
    const firstName="Kiranmayi";
    await page.fill("#createLeadForm_firstName",firstName);



    //Enter last name
    const LastName="Test"
    await page.fill("input[id='createLeadForm_lastName']", LastName);

    // Enter Salutation
    let salutation="Mrs";
    await page.fill("input[name='personalTitle']",salutation);
    //Enter Title 
    await page.fill("#createLeadForm_generalProfTitle","Associate");
    // Enter Annual Revenue
    await page.fill("input[id='createLeadForm_annualRevenue']","10L")
    //Enter Dept
    await page.fill("input[id='createLeadForm_departmentName']","QE")
    //Enter Phone Number
    await page.fill("#createLeadForm_primaryPhoneNumber","999123456");
    //Click Create Lead button
    await page.click("[name='submitButton']", {timeout:20000});
    
    //Check if Company Name is visible
    expect(page.locator("#viewLead_companyName_sp")).toBeTruthy();
    // Check if First Name to have text
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText(firstName);
    //check is LastName is same
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText(LastName);

    //Print the status

    let status=await page.locator("#viewLead_statusId_sp").textContent();
    expect(status).toBeTruthy();
    console.log(`The status of the lead is ${status}`);

    
    
     


    
})


test("Test using inbuilt getBys", async () => {
    
    //Create a browser instance
    const browser = await chromium.launch();


    //Create a browser context
    const browserContext = await browser.newContext();


    //Create a new page
    const page = await browserContext.newPage();


    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");


    //Enter the username
    await page.getByLabel("Username").fill("demosalesmanager");
    //Enter the password
   await page.getByLabel("Password").fill("crmsfa");
    //Click Login
    await page.click(".decorativeSubmit");


    //Click CRM/SFA
    await page.getByText('CRM/SFA').click();
})

test("Test to Edit Lead",async()=>
{
//creating a browser
const browser=await chromium.launch({channel:"msedge",headless:false});
const chromeContext=await browser.newContext();
const page=await chromeContext.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");


//Enter the username
await page.getByLabel("Username").fill("demosalesmanager");
//Enter the password
await page.getByLabel("Password").fill("crmsfa");
//Click Login
await page.click(".decorativeSubmit");




//Click CRM/SFA
await page.locator("text=CRM/SFA").click();

//Click Leads
 await page.click("text=Leads", {timeout:10000});

 //Click on Find Leads 
 await page.click("text=Leads", { timeout: 20000 });
 await page.click("[href='/crmsfa/control/findLeads']",{ timeout: 20000 });

 //Enter First Name under FindLeads
 await page.locator("//div[@id='findLeads']//input[@name='firstName']").fill("Kiranmayi");
 //Click on FindLeads Button
 await page.click("//button[text()='Find Leads']/../..",{ timeout: 20000 });

 //Select the first Lead under findLeads Table
 await page.locator("(//div[contains(@class,'x-grid3-cell-inner x-grid3-col-firstName')])[1]/a").click({timeout:20000});
 //Edit the lead
 await page.locator("//a[text()='Edit']").click();

 //Update Company Name
 const editedCompanyName="CTS";
 const updateCompanyInputField=page.locator("#updateLeadForm_companyName");
 await updateCompanyInputField.clear();
 await updateCompanyInputField.fill(editedCompanyName);

 //Update Annual Revenue
 const updatedAnnualRevenue="50"
 const updateAnnualRevenueInputField = page.locator("input[id='updateLeadForm_annualRevenue']")
 await updateAnnualRevenueInputField.clear();
 await updateAnnualRevenueInputField.fill(updatedAnnualRevenue);

 //Update Dept
 const updatedDepartName="QE/QA";
 const updateDeptInputField = page.locator("[id='updateLeadForm_departmentName']")
 await updateDeptInputField.clear();
 await updateDeptInputField.fill(updatedDepartName);

 //Update Description
 await page.fill("#updateLeadForm_description", "Updated Lead Data");
 //Click on Update Button
 await page.click("[value='Update']");


 //Verify using assertions
 
 expect(page.locator("#viewLead_companyName_sp")).toContainText(editedCompanyName, { timeout: 10000 });
  
 expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText('$50.00', { timeout: 10000 });
 expect(page.locator("#viewLead_departmentName_sp")).toHaveText(updatedDepartName, { timeout: 3000 });
})

 test.only("Create a new Account Using SalesForce", async()=>
 {
    const edgeBrowser=await chromium.launch({channel:"msedge",headless:false});
    
    const edgeContext=await edgeBrowser.newContext();

    const page=await edgeContext.newPage();
    page.goto("https://login.salesforce.com/");
    await page.locator("#username").fill("pkgirajala@testleaf.com");
    await page.locator("#password").fill("Vivek123#");
    await  page.locator('#Login').click();
    await page.waitForLoadState();
    //Verify the Title and URL of the page
    await expect(page).toHaveTitle('Home | Salesforce');   
     
    const url = page.url();
    console.log(`url ${url}`);
    //const expectedURL = "https://testleaf-b0-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home";
    //expect(url).toContain()
    //Click On App Launcher
    await page.locator("//div[contains(@class,'appLauncher')]/button").click({timeout:20000});
    //Click on View All using getByText
    await page.getByText("View All").click({timeout:20000});
    // Search using getByPlaceHolder
    await page.getByPlaceholder("Search apps or items...").fill("service");
    //Click on service
    await page.locator("(//div[contains(@class,'slds-app-launcher__tile-body')])[1]").click({timeout:20000});
    //Click On Accounts
    await page.click("a[title='Accounts']",{timeout:20000});
    //Click on new using getByRole
     await  page.getByRole('button', { name: 'New' }).click({timeout:30000});
    //Click on Account Name
    await page.locator("input[name='Name']").fill("Test1");
    //Click On save using xpath
    await page.click("//button[@name='SaveEdit']");
    await page.waitForLoadState();

 })






 

 
 

