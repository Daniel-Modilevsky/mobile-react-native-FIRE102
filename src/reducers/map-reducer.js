
const initState = {
    location: '138.482',
    // icon: 1,
    confirmLocation: false,
}


const TrackReducer = (state = initState, action) => {

    switch (action.type) {
        case "SET_LOCATION":
          return {...state, location: action.payload.location , confirmLocation: true} ;
        
        case "CLEAR_LOCATION":
            return {...state, location: action.payload.location , confirmLocation: false} ;

        default:
          return state;
    }
}

export default TrackReducer;