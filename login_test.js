Feature('login');

Scenario('login successfully to 999.md', ({ I }) =>{

    I.amOnPage('/');
    I.click('#m__user_panel > ul > li:nth-child(2) > a');
    I.fillField('login','dobrovolskydmitry555@gmail.com');
    I.fillField('password', secret('test01020908'));
    I.click('body > div.login-page > div.login__wrapper > form > div.login__form__footer > button');
    I.click('//body/div[4]/div[1]/section[1]/div[1]/section[1]/nav[1]/ul[1]/li[1]/a[1]');
    I.click('//*[@id="js-categories-container"]/div/div/ul[1]/li[1]/ul/li[1]/a');
    I.click('//*[@id="js-ads-filters"]/div[2]/div/ul/li[5]/div/label/span');
    I.click('//*[@id="option-387"]');
    I.fillField('//*[@id="js-ads-filters"]/div[4]/div/div/div[1]/input','7000');
    I.fillField('//*[@id="js-ads-filters"]/div[4]/div/div/div[2]/input','20000');
    I.click('//*[@id="js-ads-container"]/ul/li[1]/div[1]/a[1]/img');
    I.click('//*[@id="container"]/div/section/aside/div[1]/a[1]/span[2]');
    I.click('//*[@id="m__user_panel"]/a[1]/span');
    I.click('//*[@id="js-favorites-list"]/li/input');
    I.click('//*[@id="js-favorites-form"]/div[2]/ul/li[2]/button/i');
    I.click('ок')
   
    

})