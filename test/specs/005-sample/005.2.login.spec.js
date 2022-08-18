const { email, password } = require('../../../data/003.1.login-data').loginDetails

describe('005.2.login - Lofin as a customer ', () => {
  before(async () => {
    await driver.loginCustomer(email, password)
  })
  it('Test', async () => {
    await driver.pause(5000)
  })
})
//"wdio  wdio.conf.js --spec test/specs/005-sample/005.2.login.spec.js
