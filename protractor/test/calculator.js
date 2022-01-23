let homepage = require('../pages/homepage');

describe('Calculator test', function () {
  it('addition test', function () {
    homepage.get('http://juliemr.github.io/protractor-demo/');
    homepage.enterFirstNumber('2');
    homepage.enterSecondNumber('3');
    homepage.clickGoButton();
    homepage.checkResult('5');
  });
});
