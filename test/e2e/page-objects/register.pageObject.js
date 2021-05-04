var register_page = function() {

  this.enterFirstName = function(value) {
    return element(by.model('vm.user.firstName')).sendKeys(value);
  };
  this.getFirstName = function(){
    //element(by.model('vm.user.firstName')).getText();
    return element(by.model('vm.user.firstName')).getAttribute('value');
  };
  this.enterLastName = function(value) {
    return element(by.model('vm.user.lastName')).sendKeys(value);
  };
  this.getLastName = function(){
    //return element(by.model('vm.user.lastName')).getText();
    return element(by.model('vm.user.lastName')).getAttribute('value');
  };
  this.enterUserName = function(value) {
    return element(by.model('vm.user.username')).sendKeys(value);
  };
  this.getUserName = function(){
    //return element(by.model('vm.user.username')).getText();
    return element(by.model('vm.user.username')).getAttribute('value');
  };
  this.enterPassWord = function(value) {
    return element(by.model('vm.user.password')).sendKeys(value);
  };
  this.getPassWord = function(){
    //return element(by.model('vm.user.password')).getText();
    return element(by.model('vm.user.password')).getAttribute('value');
  };
  this.clickRegBtn = function() {
    return element(by.xpath('//html/body/div[1]/div/div/div/div/form/div[5]/button')).click();
  };

}

module.exports = new register_page();
