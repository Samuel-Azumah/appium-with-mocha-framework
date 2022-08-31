const loginCustomer = async (email, password) => {
  await $(
    '//android.widget.Button[@resource-id="ch.appculture.exlibris.develop:id/idDrawerButtonProfile"]',
  ).click()
  driver.pause(15000)
  await $('//android.widget.EditText[@resource-id="text-field_val-email"]').setValue(
    email,
  )
  await $('//android.widget.EditText[@resource-id="text-field_val-password"]').setValue(
    password,
  )
  await $('//android.widget.Button[@text="Anmelden"]').click()
}

driver.addCommand('loginCustomer', loginCustomer)
