const expect = require('chai').expect
const registrationDataHandler = require('../../../data/shared/user-create-data')
const xpathHandler = require('../../../support/xpath')
const xpath = xpathHandler.getXpath

const makeAssertion = ($el) => {
  expect($el.length).to.be.greaterThan(5)
}

describe('002.1.login - Registration trial', () => {
  const { email, name, password, passwordRepeat } =
    registrationDataHandler.registrationData()

  it("Should click on 'No account yet? Create one'", async () => {
    await $(`${xpath('TextView', 'index="5"')}`)
      .getText()
      .then(($text) => {
        expect($text.length).to.be.greaterThan(12)
      })
    await $(`${xpath('TextView', 'index="5"')}`).click()
    await $(
      `${xpath('TextView', 'elementId="00000000-0000-01ba-ffff-ffff00000026"')}`,
    ).isDisplayed()
  })

  it('Should register as a customer', async () => {
    await $(
      `${xpath(
        'EditText',
        "resource-id='com.loginmodule.learning:id/textInputEditTextName'",
      )}`,
    ).addValue(name)
    await $(
      `${xpath(
        'EditText',
        "resource-id='com.loginmodule.learning:id/textInputEditTextName'",
      )}`,
    )
      .getText()
      .then((userName) => makeAssertion(userName))

    await $$(`${xpath('EditText', "index='0'")}`)[1].addValue(email)
    await $$(`${xpath('EditText', "index='0'")}`)[1]
      .getText()
      .then((userEmail) => makeAssertion(userEmail))

    await $(
      `${xpath(
        'EditText',
        "resource-id='com.loginmodule.learning:id/textInputEditTextPassword'",
      )}`,
    ).addValue(password)

    await $(
      `${xpath(
        'EditText',
        "resource-id='com.loginmodule.learning:id/textInputEditTextConfirmPassword'",
      )}`,
    ).addValue(passwordRepeat)

    await $(
      `${xpath(
        'Button',
        "resource-id='com.loginmodule.learning:id/appCompatButtonRegister'",
      )}`,
    ).isDisplayed()
  })
})

//desired capability sample.
//remote path : /wd/hub/
//edit config: ANDROID_HOME && JAVA_HOME
// {
//   "platformName": "Android",
//   "appium:platformVersion": "11.0",
//   "appium:deviceName": "Pixel 2 XL API 30",
//   "appium:app": "/Users/Samuel Azumah/Documents/GitHub/appium-with-mocha-framework/apks/login.apk",
//   "appium:automationName": "UiAutomator2",
//   "appium:newCommandTimeout": 250
// }
