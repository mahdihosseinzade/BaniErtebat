import APIs from "../../apis/APIs";

const getActors = (payload) => {
    return {
        type: 'GETACTORS',
        payload: payload
    }
}

export const getActorsAsync = () => {
    return async (dispatch) => {
        const response = await APIs.getActors();
        dispatch(getActors(response.data));
        return response;
    };
}

const setActor = (payload,Actors) => {
    return {
        type: 'SETACTOR',
        payload: payload
    }
}

export const setActorAsync = (data) => {
    return async (dispatch) => {
        const response = await APIs.postActor(data);
        dispatch(setActor(response.data));
        return response;
    };
}