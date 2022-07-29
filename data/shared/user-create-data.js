function registrationData() {
  return {
    email: 'mario.tester+' + new Date().getTime() + '@gmail.com',
    password: '123456aA_',
    passwordRepeat: '123456aA_',
  }
}
module.exports = { registrationData }
