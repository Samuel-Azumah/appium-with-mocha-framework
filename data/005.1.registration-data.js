function registerCustomerDetails() {
  return {
    email: 'mario.tester+' + new Date().getTime() + '@gmail.com',
    password: '123456aA_',
    passwordRepeat: '123456aA_',
    firstName: 'Mario',
    lastName: 'Tester',
    phone: '+41447437272',
    salutation: 'Herr',
    streetNumber: 'Str. 01',
    placeCode: '1234',
  }
}
module.exports = { registerCustomerDetails }
