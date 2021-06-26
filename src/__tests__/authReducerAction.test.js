import AuthReducer from "../reducers/auth-reducer";

describe("Testing authentication reducer", () => {

    /*
    * Preparing for the tests
    */
    const initState = {
        userName: "none",
        password: "none",
        email: "none",
        phoneNumber: "none",
        identityNumer: "none",
        validationfalg: true,
        inVallidMessage: "",
    };
    const stateOneForTest = {
        userName: "Barak Daniel",
        password: "123456",
        email: "barak@gmail.com",
        phoneNumber: "050-1111111",
        identityNumer: "123456789",
        validationfalg: true,
        inVallidMessage: "",
    };
    const stateTwoForTest = {
        userName: "none",
        password: "none",
        email: "none",
        phoneNumber: "none",
        identityNumer: "none",
        validationfalg: false,   //The only difference with stateOne above
        inVallidMessage: "Invalid message",    //The only difference with stateOne above
    };

    /*
    * Testing Auth reducer return value properties
    */
    // REGISTER TESTING
    test("AuthReducer 'REGISTER' testing to check property - userName", () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result).toHaveProperty('userName');
    });
    test("AuthReducer 'REGISTER' testing to check property - password", () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result).toHaveProperty('password');
    });
    test("AuthReducer 'REGISTER' testing to check property - email", () => {
        const result = AuthReducer(stateOneForTest, "REGISTER");
        expect(result).toHaveProperty('email');
    });
    test("AuthReducer 'REGISTER' testing to check property - phoneNumber", () => {
        const result = AuthReducer(stateOneForTest, "REGISTER");
        expect(result).toHaveProperty('phoneNumber');
    });
    test("AuthReducer 'REGISTER' testing to check property - identityNumer", () => {
        const result = AuthReducer(stateTwoForTest, "REGISTER");
        expect(result).toHaveProperty('identityNumer');
    });
    test("AuthReducer 'REGISTER' testing to check property - validationfalg", () => {
        const result = AuthReducer(stateTwoForTest, "REGISTER");
        expect(result).toHaveProperty('validationfalg');
    });
    test("AuthReducer 'REGISTER' testing to check property - inVallidMessage", () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result).toHaveProperty('inVallidMessage');
    });

    // REGISTER TESTING
    test("AuthReducer 'LOGIN' testing to check property - userName", () => {
        const result = AuthReducer(initState, "LOGIN");
        expect(result).toHaveProperty('userName');
    });
    test("AuthReducer 'LOGIN' testing to check property - password", () => {
        const result = AuthReducer(initState, "LOGIN");
        expect(result).toHaveProperty('password');
    });
    test("AuthReducer 'LOGIN' testing to check property - email", () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result).toHaveProperty('email');
    });
    test("AuthReducer 'LOGIN' testing to check property - phoneNumber", () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result).toHaveProperty('phoneNumber');
    });
    test("AuthReducer 'LOGIN' testing to check property - identityNumer", () => {
        const result = AuthReducer(stateTwoForTest, "LOGIN");
        expect(result).toHaveProperty('identityNumer');
    });
    test("AuthReducer 'LOGIN' testing to check property - validationfalg", () => {
        const result = AuthReducer(stateTwoForTest, "LOGIN");
        expect(result).toHaveProperty('validationfalg');
    });
    test("AuthReducer 'REGISTER' testing to check property - inVallidMessage", () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result).toHaveProperty('inVallidMessage');
    });

    /*
    * Testing returned data values
    */
    // REGISTER TESTING
    test('Checking the payload values - userName', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.userName).toEqual("none");
    });
    test('Checking the payload values - password', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.password).toEqual("none");
    });
    test('Checking the payload values - email', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.email).toEqual("none");
    });
    test('Checking the payload values - phoneNumber', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.phoneNumber).toEqual("none");
    });
    test('Checking the payload values - identityNumer', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.identityNumer).toEqual("none");
    });
    test('Checking the payload values - validationfalg', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.validationfalg).toEqual(true);
    });
    test('Checking the payload values - inVallidMessage', () => {
        const result = AuthReducer(initState, "REGISTER");
        expect(result.inVallidMessage).toEqual("");
    });

    // LOGIN TESTING
    test('Checking the payload values - userName', () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result.userName).toEqual("Barak Daniel");
    });
    test('Checking the payload values - password', () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result.password).toEqual("123456");
    });
    test('Checking the payload values - email', () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result.email).toEqual("barak@gmail.com");
    });
    test('Checking the payload values - phoneNumber', () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result.phoneNumber).toEqual("050-1111111");
    });
    test('Checking the payload values - identityNumer', () => {
        const result = AuthReducer(stateOneForTest, "LOGIN");
        expect(result.identityNumer).toEqual("123456789");
    });
    test('Checking the payload values - validationfalg', () => {
        const result = AuthReducer(stateTwoForTest, "LOGIN");
        expect(result.validationfalg).toEqual(false);
    });
    test('Checking the payload values - inVallidMessage', () => {
        const result = AuthReducer(stateTwoForTest, "LOGIN");
        expect(result.inVallidMessage).toEqual("Invalid message");
    });

})

