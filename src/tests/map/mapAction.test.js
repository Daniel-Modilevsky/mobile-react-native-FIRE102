// import { AddMarker, ClearMarkers, SetLocation } from '../../components/map/map.actions';

// describe('unit testing map actions', () => {

//     test('calling clear markers action populates markers array', () => {
//         const result = [];
//           const marker = {
//             key: Date.now(),
//             coordinate: {
//               latitude: 32.1234,
//               longitude: 34.4562,
//             }
//           };
//         result.push(marker);
//         const actionResult = AddMarker(result);
//         expect(actionResult.payload).toHaveProperty('key');
//     });

//     test('calling clear markers action populates markers array', () => {
//       const actionResult = ClearMarkers();
//       expect(actionResult.payload).toHaveProperty([]);
//     });

//     test('calling clear markers action populates markers array', () => {
//         const region = {
//             latitude: 31.1656,
//             longitude:  32.496435,
//             latitudeDelta: 0.01,
//             longitudeDelta: 0.01
//           };
//         const actionResult = SetLocation(region);
//         expect(actionResult.payload).toHaveProperty('region');
//     });
//   });
