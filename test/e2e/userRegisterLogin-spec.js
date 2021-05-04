require ('util')
'use strict';
var loginpage = require(__dirname+'\\page-objects\\login.pageObject.js');
var registerpage = require(__dirname+'\\page-objects\\register.pageObject.js');
var logoutpage = require(__dirname+'\\page-objects\\logout.pageObject.js');
describe('AngularJS', function() {
  var autoGenerateUserName = function() {
       var autoGenerateUserName = "";
       var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
       for (var i = 0; i < 3; i++)
           autoGenerateUserName += possible.charAt(Math.floor(Math.random() * possible.length));
       return  autoGenerateUserName;
   };
  var randVal = autoGenerateUserName();
  var start = new Date().getTime();

 beforeEach(function() {
   //browser.waitForAngular();
   browser.refresh();
 });

 it('should navigate to the login page upon opening the application in browser', function () {
     browser.executeAsyncScript(
       'window.setTimeout(arguments[arguments.length - 1], 500);'
     ).then(function() {
        console.log(
            'Elapsed time on login page: ' + (new Date().getTime() - start) + ' ms');
      });
     browser.driver.getCurrentUrl().then(function(text){console.log(text);});
     expect(browser.getCurrentUrl()).toContain('/login','Login page opened');
 });

 it('should navigate to the register page when the register button is clicked', function () {
   loginpage.clickRegisterBtn();
   browser.driver.wait(
     function() {
       return browser.driver.getCurrentUrl().then
       (function(url)
       {
           return (/register/).test(url);
       });
     });
     browser.driver.getCurrentUrl().then(function(text){console.log(text);});
     expect(browser.getCurrentUrl()).toContain('/register', 'Registration page opened');
 });

 it('should register user', function() {
   registerpage.enterFirstName('Dirk');
   registerpage.getFirstName().then(function(text) {
       console.log("Got firstname: "+text);
       browser.params.firstname = text;
     expect(text).toContain('Dirk');
  });

   registerpage.enterLastName('Nonn');
   registerpage.getLastName().then(function(text) {
      console.log("Got lastname: "+text);
    expect(text).toContain('Nonn');
 });

   registerpage.enterUserName('dirk.nonn@cgm.com#1111'+randVal);
   registerpage.getUserName().then(function(text) {
      console.log("Got username: "+text);
      browser.params.username = text;
      expect(text).toContain('dirk.nonn@cgm.com#1111'+randVal);
    });

 registerpage.enterPassWord('recruitingTest1!');
 registerpage.getPassWord().then(function(text) {
    console.log("Got password: "+text);
    browser.params.password = text;
  expect(text).toContain('recruitingTest1!');
});

  //Click on Register button
   registerpage.clickRegBtn();

   //Wait for the current URL to change to welcome
   browser.driver.wait(
     function() {
       return browser.driver.getCurrentUrl().then
       (function(url)
       {
           return (/login/).test(url);
       });
     });

   expect(browser.getCurrentUrl()).toContain('http://localhost:8081/#!/login');
});

it('should login registered user', function() {
  browser.executeAsyncScript('window.setTimeout(arguments[arguments.length - 1], 500);').
   then(function() {
     console.log(
         'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
   });
   loginpage.enterUsername(browser.params.username);
   expect(loginpage.getUsername()).toContain('dirk.nonn@cgm.com#1111'+randVal);

   loginpage.enterPassword(browser.params.password);
   expect(loginpage.getPassword()).toContain('recruitingTest1!');

   loginpage.clickLoginBtn();

   expect(browser.getCurrentUrl()).toContain('http://localhost:8080/#!');
});

   it('logout the logged in user', function(){
   logoutpage.homePageHeader().getText().then(function(text) {
  console.log("Homepage validation "+text);
  expect(text).toContain('You\'re logged in!!');
    });
   logoutpage.clickLogoutBtn();
 });
});
