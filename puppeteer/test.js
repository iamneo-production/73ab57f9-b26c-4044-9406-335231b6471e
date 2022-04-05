const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-dacdfefdcdfbccaafaeababebacaeafebcebb.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@iamneo.ai');
    await page.type('#password', 'neo');
    await page.click('#submitButton');
    //await page.screenshot({path: 'example.png'});
      await page.waitForSelector('#navbar',{timeout:1500});
      console.log('TESTCASE:test_case6:success');
    }
     catch(e){
      console.log('TESTCASE:test_case6:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
  })();


  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dacdfefdcdfbccaafaeababebacaeafebcebb.examlyiopb.examly.io');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'admin');
    await page.type('#password', 'admin');
    await page.click('#submitButton');
    await page.waitForSelector('#adminNavbar',{timeout:1500});
    console.log('TESTCASE:test_case7:success');
    } catch(e) {
      console.log('TESTCASE:test_case7:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dacdfefdcdfbccaafaeababebacaeafebcebb.examlyiopb.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#email', 'test@iamneo.ai');
    await page.type('#password', 'neo');
    await page.click('#submitButton');
    await page.waitForNavigation();
    await page.waitForSelector('#cartButton' ,{timeout:1500});
    await page.click("#cartButton");
      // await page.screenshot({path: 'example2.png'});
      await page.waitForSelector('#cartBody' ,{timeout:1500});
      console.log('TESTCASE:test_case8:success');
    } catch(e) {
      console.log('TESTCASE:test_case8:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();

  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto('https://8081-dacdfefdcdfbccaafaeababebacaeafebcebb.examlyiopb.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#email', 'test@iamneo.ai');
    await page.type('#password', 'neo');
    await page.click('#submitButton');
    await page.waitForNavigation();
    await page.waitForSelector('#orderButton' ,{timeout:1500});
    await page.click("#orderButton");
      // await page.screenshot({path: 'example3.png'});
      await page.waitForSelector('#orderBody' ,{timeout:1500});
      console.log('TESTCASE:test_case9:success');
    } catch(e) {
      console.log('TESTCASE:test_case9:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();
 
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    
    try {
      await page.goto('https://8081-dacdfefdcdfbccaafaeababebacaeafebcebb.examlyiopb.examly.io');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#email', 'test@iamneo.ai');
    await page.type('#password', 'neo');
    await page.click('#submitButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logoutButton',{timeout:2000});
      await page.click("#logoutButton");
      // await page.screenshot({path: 'example4.png'});
      await page.waitForSelector('#loginBox',{timeout:1000});
      console.log('TESTCASE:test_case10:success');
    } catch(e) {
      console.log('TESTCASE:test_case10:failure');
    }finally{
      await page.close();
  await browser.close();
    }
  })();