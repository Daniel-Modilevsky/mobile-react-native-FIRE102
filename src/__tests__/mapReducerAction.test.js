import MapReducer from "../reducers/map-reducer";

describe("Testing map reducer", () => {

    /*
    * Preparing for the tests
    */
    const initState = {
        marker: {
            key: "-1",
            coordinate: {
                latitude: 37.78825,
                longitude: -122.4324,
            },
            displayName: "none",
        },
        currentLocationFlag: false,
        counter: 1,
        markerFlag: false,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.01,
            longitudeDelta: (0.01 * 100) / 70,
        },
        type: "none",
        photoUrl: "none"
    };
    const stateOneForTest = {
        marker: {
            key: "9988",
            coordinate: {
                latitude: 35.78825,
                longitude: 35.78825,
            },
            displayName: "TelAviv",
        },
        currentLocationFlag: false,
        counter: 1,
        markerFlag: true,
        region: {
            latitude: 35.78825,
            longitude: 35.78825,
            latitudeDelta: 0.01,
            longitudeDelta: (0.01 * 100) / 70,
        },
        type: "none",
        photoUrl: "none"
    };
    const stateTwoForTest = {
        marker: {
            key: "9977",
            coordinate: {
                latitude: 42.78825,
                longitude: 42.78825,
            },
            displayName: "none",
        },
        currentLocationFlag: false,
        counter: 9,
        markerFlag: false,
        region: {
            latitude: 42.78825,
            longitude: 42.78825,
            latitudeDelta: 0.01,
            longitudeDelta: (0.01 * 100) / 70,
        },
        type: "none",
        photoUrl: "none"
    };

    /*
    * Testing Auth reducer return value properties
    */
    // SET_LOCATION TESTING
    test("MapReducer 'SET_LOCATION' testing to check property - region", () => {
        const result = MapReducer(initState, "SET_LOCATION");
        expect(result).toHaveProperty('region');
    });
    test("MapReducer 'SET_LOCATION' testing to check property - currentLocationFlag", () => {
        const result = MapReducer(initState, "SET_LOCATION");
        expect(result).toHaveProperty('currentLocationFlag');
    });
    // CLEAR_MARKERS TESTING
    test("MapReducer 'CLEAR_MARKERS' testing to check property - marker", () => {
        const result = MapReducer(stateOneForTest, "CLEAR_MARKERS");
        expect(result).toHaveProperty('marker');
    });
    test("MapReducer 'CLEAR_MARKERS' testing to check property - counter", () => {
        const result = MapReducer(stateOneForTest, "CLEAR_MARKERS");
        expect(result).toHaveProperty('counter');
    });
    test("MapReducer 'CLEAR_MARKERS' testing to check property - markerFlag", () => {
        const result = MapReducer(stateOneForTest, "CLEAR_MARKERS");
        expect(result).toHaveProperty('markerFlag');
    });
    // ADD_MARKER TESTING
    test("MapReducer 'ADD_MARKER' testing to check property - marker", () => {
        const result = MapReducer(stateTwoForTest, "ADD_MARKER");
        expect(result).toHaveProperty('marker');
    });
    test("MapReducer 'ADD_MARKER' testing to check property - markerFlag", () => {
        const result = MapReducer(stateTwoForTest, "ADD_MARKER");
        expect(result).toHaveProperty('markerFlag');
    });
    test("MapReducer 'ADD_MARKER' testing to check property - counter", () => {
        const result = MapReducer(stateTwoForTest, "ADD_MARKER");
        expect(result).toHaveProperty('counter');
    });
    // ADD_TYPE TESTING
    test("MapReducer 'ADD_TYPE' testing to check property - type", () => {
        const result = MapReducer(initState, "ADD_TYPE");
        expect(result).toHaveProperty('type');
    });
    // ADD_PHOTO TESTING
    test("MapReducer 'ADD_PHOTO' testing to check property - photoUrl", () => {
        const result = MapReducer(initState, "ADD_PHOTO");
        expect(result).toHaveProperty('photoUrl');
    });

    /*
    * Testing returned data values
    */
    // SET_LOCATION TESTING
    test('Checking the payload values - region', () => {
        const result = MapReducer(stateOneForTest, "SET_LOCATION");
        expect(result.region).toEqual({
            latitude: 35.78825,
            longitude: 35.78825,
            latitudeDelta: 0.01,
            longitudeDelta: (0.01 * 100) / 70,
        });
    });
    test('Checking the payload values - currentLocationFlag', () => {
        const result = MapReducer(stateOneForTest, "SET_LOCATION");
        expect(result.currentLocationFlag).toEqual(false);
    });
    // CLEAR_MARKERS TESTING
    test('Checking the payload values - marker', () => {
        const result = MapReducer(stateTwoForTest, "CLEAR_MARKERS");
        expect(result.marker).toEqual({
            key: "9977",
            coordinate: {
                latitude: 42.78825,
                longitude: 42.78825,
            },
            displayName: "none",
        });
    });
    test('Checking the payload values - counter', () => {
        const result = MapReducer(stateTwoForTest, "CLEAR_MARKERS");
        expect(result.counter).toEqual(9);
    });
    test('Checking the payload values - markerFlag', () => {
        const result = MapReducer(stateTwoForTest, "CLEAR_MARKERS");
        expect(result.markerFlag).toEqual(false);
    });
    // ADD_MARKER TESTING
    test('Checking the payload values - marker', () => {
        const result = MapReducer(stateOneForTest, "ADD_MARKER");
        expect(result.marker).toEqual({
            key: "9988",
            coordinate: {
                latitude: 35.78825,
                longitude: 35.78825,
            },
            displayName: "TelAviv",
        });
    });
    test('Checking the payload values - counter', () => {
        const result = MapReducer(stateOneForTest, "ADD_MARKER");
        expect(result.counter).toEqual(1);
    });
    test('Checking the payload values - markerFlag', () => {
        const result = MapReducer(stateOneForTest, "ADD_MARKER");
        expect(result.markerFlag).toEqual(true);
    });
    // ADD_TYPE TESTING
    test('Checking the payload values - type', () => {
        const result = MapReducer(initState, "ADD_TYPE");
        expect(result.type).toEqual("none");
    });
    // ADD_PHOTO TESTING
    test('Checking the payload values - photoUrl', () => {
        const result = MapReducer(initState, "ADD_PHOTO");
        expect(result.photoUrl).toEqual("none");
    });
})

