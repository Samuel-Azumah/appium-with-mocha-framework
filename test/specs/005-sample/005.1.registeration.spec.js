const registrationHandler = require('../../../data/005.1.registration-data')

describe('005.1.resgistration - register as a user', () => {
  const {
    email,
    password,
    passwordRepeat,
    firstName,
    lastName,
    phone,
    salutation,
    streetNumber,
    placeCode,
  } = registrationHandler.registerCustomerDetails()

  it('Navigate to registration page', async () => {
    await $(
      '//android.widget.Button[@resource-id="ch.appculture.exlibris.develop:id/idDrawerButtonProfile"]',
    ).click()
    await driver.pause(15000)
    await driver.touchAction([
      { action: 'press', x: 524, y: 1233 },
      { action: 'moveTo', x: 598, y: 274 },
      { action: 'release' },
    ])
    await $('//android.widget.Button[@text="Registrieren"]').click()
    await $('//android.view.View[text="NEUES KONTO ERÖFFNEN"]').isDisplayed()
  })

  it('Should fill in registration form', async () => {
    await $(
      '//android.widget.EditText[@resource-id="text-field_val-emailAddress"]',
    ).setValue(email)
    await $('//android.widget.EditText[@resource-id="text-field_val-password"]').setValue(
      password,
    )
    await $(
      '//android.widget.EditText[@resource-id="text-field_val-confirmPassword"]',
    ).setValue(passwordRepeat)

    await driver.touchAction([
      { action: 'press', x: 647, y: 1046 },
      { action: 'moveTo', x: 627, y: 449 },
      { action: 'release' },
    ])
    await driver.touchAction([
      { action: 'press', x: 500, y: 1175 },
      { action: 'moveTo', x: 519, y: 344 },
      { action: 'release' },
    ])

    await $('//android.view.View[@text="Bitte Anrede auswählen"]').click()
    await $(`//android.widget.CheckedTextView[@text="${salutation}"]`).click()

    await $(
      '//android.widget.EditText[@resource-id="text-field_val-firstName"]',
    ).setValue(firstName)
    await $('//android.widget.EditText[@resource-id="text-field_val-lastName"]').setValue(
      lastName,
    )

    await driver.touchAction([
      { action: 'press', x: 500, y: 1175 },
      { action: 'moveTo', x: 519, y: 344 },
      { action: 'release' },
    ])

    await $('//android.widget.EditText[@resource-id="text-field_val-street"]').setValue(
      streetNumber,
    )

    await $('//android.widget.EditText[@resource-id="text-field_val-zipCode"]').setValue(
      placeCode,
    )
    await driver.touchAction([
      { action: 'press', x: 500, y: 1175 },
      { action: 'moveTo', x: 519, y: 344 },
      { action: 'release' },
    ])

    await $(
      '//android.widget.EditText[@resource-id="text-field_val-phoneNumber"]',
    ).setValue(phone)

    await driver.touchAction([
      { action: 'press', x: 500, y: 1175 },
      { action: 'moveTo', x: 519, y: 344 },
      { action: 'release' },
    ])

    await $('//android.widget.Button[@text="Speichern und weiter"]').click()
    await driver.pause(2000)
    await $('//android.view.View[@text="MEIN EX LIBRIS"]').isDisplayed()
  })
})
