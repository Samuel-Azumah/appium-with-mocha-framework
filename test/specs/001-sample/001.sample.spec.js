const registrationDataHandler = require("../../../data/shared/user-create-data");
const registrationData = registrationDataHandler.registrationData;

describe(`first`, () => {
	it("first", () => {
		console.log(`${registrationData().email}`);
	});
});
