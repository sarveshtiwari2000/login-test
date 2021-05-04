var logout_page = function() {

this.homePageHeader = function() {
  return element(by.xpath('html/body/div[1]/div/div/div/p[1]'));
};

this.clickLogoutBtn = function() {
  return element(by.xpath('//html/body/div[1]/div/div/div/p[3]/a')).click();
};

}
module.exports = new logout_page();
