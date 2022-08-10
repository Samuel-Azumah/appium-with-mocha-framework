const loginDataHandler = require('../../../data/003.1.login-data')
const { email, password } = loginDataHandler.loginDetails

describe('003.1.login - Login as a customer', () => {
  it('Should login as a customer', async () => {
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etLoginEmail"]').isDisplayed()
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etLoginEmail"]').setValue(
      email,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etLoginEmail"]')
      .getText()
      .then(($text) => expect($text).to.equal(email))

    await $(
      '[resource-id="com.royalapps.niyimakonjuola:id/etLoginPassword"]',
    ).isDisplayed()
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etLoginPassword"]').setValue(
      password,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etLoginEmail"]')
      .getText()
      .then(($text) => expect($text.length).to.be.greaterThan(5))

    await $('[resource-id="com.royalapps.niyimakonjuola:id/btnLogin"]').isDisplayed()
    await $('[resource-id="com.royalapps.niyimakonjuola:id/btnLogin"]').click()
  })
})
