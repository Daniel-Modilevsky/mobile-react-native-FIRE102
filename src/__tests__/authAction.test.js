import { register } from '../components/authentication/auth.actions';

describe("Testing authentication", () => {

    const result = register("Barak Daniel", "barak@gmail.com", "123456", "050-1111111", "123456789", true);

    /*
    * Testing return value properties
    */
    test("Register testing to check property - type", () => {
        expect(result).toHaveProperty('type')
    });
    test("Register testing to check property - payload", () => {
        expect(result).toHaveProperty('payload')
    });

    /* 
     * Testing payload's properties
     */
    test("Register testing to check payload's property - userName", () => {
        expect(result.payload).toHaveProperty('userName')
    });
    test("Register testing to check payload's property - email", () => {
        expect(result.payload).toHaveProperty('email')
    });
    test("Register testing to check payload's property - password", () => {
        expect(result.payload).toHaveProperty('password')
    });
    test("Register testing to check payload's property - phoneNumber", () => {
        expect(result.payload).toHaveProperty('phoneNumber')
    });
    test("Register testing to check payload's property - identityNumer", () => {
        expect(result.payload).toHaveProperty('identityNumer')
    });


    /*
    * Testing payload's values
    */
    test('Checking the payload values - userName', () => {
        expect(result.payload.userName).toEqual("Barak Daniel");
    });
    test('Checking the payload values - email', () => {
        expect(result.payload.email).toEqual("barak@gmail.com");
    });
    test('Checking the payload values - password', () => {
        expect(result.payload.password).toEqual("123456");
    });
    test('Checking the payload values - phoneNumber', () => {
        expect(result.payload.phoneNumber).toEqual("050-1111111");
    });
    test('Checking the payload values - identityNumer', () => {
        expect(result.payload.identityNumer).toEqual("123456789");
    });
})

