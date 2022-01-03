const initialState = {
    Actors: []
}

const ActorReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GETACTORS":
            if (action.payload) {
                return {
                    ...state,
                    Actors: action.payload.actors
                }
            }
            return state;

        case "SETACTOR":
            return state;

        default:
            return state;
    }
}

export default ActorReducers;