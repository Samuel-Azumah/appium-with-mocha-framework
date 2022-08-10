function registerCustomerDetails() {
  return {
    email: 'mario.tester+' + new Date().getTime() + '@gmail.com',
    fullName: 'Mario Tester',
    phone: '+2331452878',
    userName: 'MarioTes',
    password: '123456aA_',
    passwordRepeat: '123456aA_',
  }
}
module.exports = { registerCustomerDetails }
