const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const URL = 'https://commerceos.staging.devpayever.com';

let browser = new Builder().forBrowser('chrome').build();

describe('Running unit Test for Payever Comerceos', () => {

    before(async () => {
        // browser = await new Builder().forBrowser('chrome').build();
        await browser.manage().setTimeouts({ implicit: 20000 });
        await browser.get(URL)
    });

    after(async () => {
        await browser.quit()
    });

    it('Should initiate login Automatically', async () => {
        const inputId = await browser.findElement(By.css('input[name=UserName]'));
        inputId.sendKeys('aqa@payever.org', Key.ENTER);
        const inputPass = await browser.findElement(By.css('input#mat-input-4'));
        inputPass.sendKeys('Aqacool123!', Key.ENTER);
        await browser.wait(until.urlIs('https://commerceos.staging.devpayever.com/switcher/profile'));
        const homePage = await browser.getCurrentUrl();
        assert.equal(homePage, 'https://commerceos.staging.devpayever.com/switcher/profile')
    });

    it('Should click profile switch', async () => {
        const button = await browser.findElement(By.css('.mat-card-logo-wrapper'));
        await button.click()
    });

    it('Should click business Icon', async () => {
        const button = await browser.findElement(By.css('button.mat-button-link:nth-child(1)'));
        await button.click()
    });

    it('Should click Shop from menu', async () => {
        const button = await browser.findElement(By.css('div:nth-child(1) > business-applications > div:nth-child(7)'));
        await button.click()
    });


    it('Should click Theme Menu to select a new theme', async () => {
        const button = await browser.findElement(By.css('div.mat-toolbar-area.mat-toolbar-left.ng-star-inserted > button:nth-child(3)'));
        await button.click();
        await button.click();
    });

    it('Should Add new Theme', async () => {
        const button = await browser.findElement(By.css('mat-card > mat-card-content'));
        await button.click()
    });

    it('Should click Text Area to add', async () => {
        const button = await browser.findElement(By.css('#menus > pe-builder-navbar-top > mat-toolbar > mat-toolbar-row > pe-builder-navbar-top-button:nth-child(6)'));
        await button.click()
    });

    // This add Hello to the text box
    it('Should add Hello To selected text area', async () => {
        const inputId = await browser.findElement(By.css('#content > div.canvas-container > pe-editor-text-decorator > peb-text-editor > div'));
        await inputId.click();
        inputId.innerHTML = "Paragraph changed!";
        inputId.sendKeys('Hello its working');
        // documen
        // inputId.getAttribute('innerHTML');

        // console.log(inputId.toString())
    })
});
