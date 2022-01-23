let homepage = function () {
  let firstNumber_input = element(by.model('first'));
  let secondNumber_input = element(by.model('second'));
  let goButton = element(by.css('[ng-click="doAddition()"]'));

  this.get = function (url) {
    browser.get('http://juliemr.github.io/protractor-demo/');
  };

  this.enterFirstNumber = function (firstNumber) {
    firstNumber_input.sendKeys(firstNumber);
  };

  this.enterSecondNumber = function (secondNumber) {
    secondNumber_input.sendKeys(secondNumber);
  };

  this.clickGoButton = function () {
    goButton.click();
  };

  this.checkResult = function (expectedresult) {
    let result = element(by.cssContainingText('.ng-binding', expectedresult));
    expect(result.getText()).toEqual(expectedresult);
  };
};

module.exports = new homepage();
