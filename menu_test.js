Feature('menu');

Scenario('test something',  ({ I }) => {
    const marketplace = '#js-popular-marketplace';

    I.amOnPage('/');
    I.waitForVisible('.header_bar_logo');
    I.scrollTo(marketplace);
    I.waitForVisible(marketplace);
});
