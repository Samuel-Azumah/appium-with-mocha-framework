const getXpathHandler = require('./xpath')

const xpath = getXpathHandler.getXpath

const selectEnglishLanguage = async () => {
  await $(`${xpath('imageView', 'index=2')}`).click()
  await $('#com.snapdeal.main:id/cta').click()
  await $('#android:id/button1').click()
}

const clickOnRegistrationButton = async () => {
  await $(
    '[resource-id="com.royalapps.niyimakonjuola:id/btnLoginRegister"]',
  ).isDisplayed()
  await $('[resource-id="com.royalapps.niyimakonjuola:id/btnLoginRegister"]').click()
  console.log('hey , I worked')
}

driver.addCommand('clickOnRegistrationButton', clickOnRegistrationButton)
driver.addCommand('selectEnglishLanguage', selectEnglishLanguage)
