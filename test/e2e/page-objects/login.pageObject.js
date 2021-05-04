var login_page = function() {

  this.enterUsername = function(value) {
    return element(by.model('vm.username')).sendKeys(value);
  };
  this.getUsername = function(){
    //return element(by.model('vm.username')).getText();
    return element(by.model('vm.username')).getAttribute('value');
  };
  this.enterPassword = function(value) {
    return element(by.model('vm.password')).sendKeys(value);
  };
  this.getPassword = function(){
    //return element(by.model('vm.password')).getText();
    return element(by.model('vm.password')).getAttribute('value')
  };
  this.clickLoginBtn = function() {
    return element(by.className("btn btn-primary")).click();
  };
  this.clickRegisterBtn = function() {
    return element(by.linkText('Register')).click();
  };

}

module.exports = new login_page();
