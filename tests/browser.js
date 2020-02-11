const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-fullscreen']
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.type('#username', "Jhony Souza");
    await page.type('#email', "jhony.souza@mail.com.br");
    await page.click('[type="submit"]');
    
    await page.screenshot({ path: './src/screenshot/cadastro.png' });
    await browser.close();

})();