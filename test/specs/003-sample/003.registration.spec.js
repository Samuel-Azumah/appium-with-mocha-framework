const registerCustomerHandler = require('../../../data/003.registration-data')
const {
  email,
  fullName,
  phone,
  userName,
  password,
  passwordRepeat,
} = registerCustomerHandler.registerCustomerDetails()

describe('003-Registration', () => {
  it('Should click on "REGISTER" Button', async () => {
    await driver.clickOnRegistrationButton()
    // await $(
    //   '[resource-id="com.royalapps.niyimakonjuola:id/btnLoginRegister"]',
    // ).isDisplayed()
    // await $('[resource-id="com.royalapps.niyimakonjuola:id/btnLoginRegister"]').click()
  })

  it('Should register new customer', async () => {
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etFullName"]').addValue(
      fullName,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etPhone"]').addValue(phone)
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etUserName"]').addValue(
      userName,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etEmail"]').addValue(email)
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etPassword"]').addValue(
      password,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/etConfirmPassword"]').addValue(
      passwordRepeat,
    )
    await $('[resource-id="com.royalapps.niyimakonjuola:id/btnRegister"]').click()
    driver.pause(10000)
  })
})

//android.widget.Button
