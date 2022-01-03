const initialState={
    Sensors:[]
}

const SensorReducers =(state=initialState,action)=>{
    switch(action.type){
        case "GETSENSORS":
            if(action.payload){
                return {
                    ...state,
                    Sensors:action.payload.sensors
                }
            }
            return state;
            
        default:
            return state;
    }
}

export default SensorReducers;