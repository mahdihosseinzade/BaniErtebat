import axios from "axios";

const apiSensors ='http://webswitch.ir:3000/sensors';


const apiActors = 'http://webswitch.ir:3000/actors';


export const getSensors = async ()=>{
    const res = await axios.get(apiSensors);
    return res;
} 

export const getActors = async () => {
    const res=await axios.get(apiActors);
    return res;
} 

export const postActor = async (data) => {
    const res = await axios.post(apiActors,data);
    return res;
} 

const APIs={
    getSensors,getActors,postActor
};

export default APIs;