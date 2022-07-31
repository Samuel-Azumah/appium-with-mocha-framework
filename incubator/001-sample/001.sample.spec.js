const expect = require('chai').expect
const sampleDataHandler = require('../../../data/001.sample.data')
const xpathHandler = require('../../../support/xpath')
const xpath = xpathHandler.getXpath

describe('001.Sample - For testing purposes', () => {
  it('Test one', async () => {
    await $(`${xpath('TextView', "text='AdMob Integration'")}`).isDisplayed()
    await $(`${xpath('TextView', "text='AdMob Integration'")}`)
      .getText()
      .then(($text) => expect($text).to.equal(sampleDataHandler.headerName))
  })

  it('Step two', async () => {
    await $(
      `${xpath(
        'TextView',
        'resource-id="com.sabithpkcmnr.admobintegration:id/textView"',
      )}`,
    ).isDisplayed()
    await $(
      `${xpath(
        'TextView',
        'resource-id="com.sabithpkcmnr.admobintegration:id/textView"',
      )}`,
    )
      .getAttribute('enabled')
      .then(($attributeValue) => expect($attributeValue).to.equal('true'))

    await $(
      `${xpath(
        'TextView',
        'resource-id="com.sabithpkcmnr.admobintegration:id/textView"',
      )}`,
    )
      .getText()
      .then(($text) => expect($text).to.includes('Sample'))
  })
})
