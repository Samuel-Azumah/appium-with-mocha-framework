const getXpathHandler = require('../../../support/xpath')

const xpath = getXpathHandler.getXpath

const selectEnglishLanguage = async () => {
  await $(`${xpath('imageView', 'index=2')}`).click()
  await $('#com.snapdeal.main:id/cta').click()
  await $('#android:id/button1').click()
}

module.exports = { selectEnglishLanguage }
