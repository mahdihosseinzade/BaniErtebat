import APIs from "../../apis/APIs";

const getSensors=(payload)=>{
    return{
        type:'GETSENSORS',
        payload:payload
    }
}

export const getSensorAsync=()=>{
    return async (dispatch)=>{
        const response = await APIs.getSensors();
        dispatch(getSensors(response.data));
        return response;
    };
}