import { AddMarker, ClearMarkers, SetLocation } from '../components/map/map.actions';

describe('unit testing map actions', () => {

    test('Checking return marker property - key', () => {
        result = [];
        const marker = {
            key: Date.now(),
            coordinate: {
                latitude: 32.1234,
                longitude: 34.4562,
            }
        };
        result.push(marker);
        const actionResult = AddMarker(marker);
        expect(actionResult.payload).toHaveProperty('key');
    });

    test('Checking return marker property - coordinate', () => {
        result = [];
        const marker = {
            key: Date.now(),
            coordinate: {
                latitude: 32.1234,
                longitude: 34.4562,
            }
        };
        result.push(marker);
        const actionResult = AddMarker(marker);
        expect(actionResult.payload).toHaveProperty('coordinate');
    });

    test('Checking return marker property - type', () => {
        result = [];
        const marker = {
            key: Date.now(),
            coordinate: {
                latitude: 32.1234,
                longitude: 34.4562,
            }
        };
        result.push(marker);
        const actionResult = AddMarker(marker);
        expect(actionResult).toHaveProperty('type');
    });

    test('Calling clear markers to check if it is empty', () => {
        const actionResult = ClearMarkers();
        expect(actionResult.payload).toEqual({});
    });

    test('Checking return marker proerty after calling ClearMarkers - type', () => {
        const actionResult = ClearMarkers();
        expect(actionResult).toHaveProperty('type');
    });

    test('Checking return region property - region', () => {
        const region = {
            latitude: 31.1656,
            longitude: 32.496435,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        };
        const actionResult = SetLocation(region);
        expect(actionResult.payload).toHaveProperty('region');
    });

    test('Checking new region latitude data after adding new one', () => {
        const region = {
            latitude: 31.1656,
            longitude: 32.496435,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        };
        const actionResult = SetLocation(region);
        expect(actionResult.payload.region.latitude).toEqual(31.1656);
    });

    test('Checking new region latitudeDelta data after adding new one', () => {
        const region = {
            latitude: 31.1656,
            longitude: 32.496435,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        };
        const actionResult = SetLocation(region);
        expect(actionResult.payload.region.longitudeDelta).toEqual(0.01);
    });

});
