import {React,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ListSensors.scss";

import TypeSensor1 from "../Sensors/TypeSensor1/TypeSensor1";
import TypeSensor2 from "../Sensors/TypeSensor2/TypeSensor2";

import { getSensorAsync } from "../../Store/Sensors/SensorActions";

const ListSensors =()=>{
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSensorAsync());
    }, []);

    const Sensors = useSelector(state=>state.Sensors.Sensors);
    
    
    return (
      <div className="container d-flex flex-row flex-wrap mt-4">
          {Sensors
            ? Sensors.map((Sensor) => {
                if (Sensor.sensortype === 1) {
                  return (
                    <TypeSensor1
                      key={Sensor.sensorid}
                      name={Sensor.sensorname}
                      value={Sensor.sensordata}
                    />
                  );
                } else if (Sensor.sensortype === 2) {
                  return (
                    <TypeSensor2
                      key={Sensor.sensorid}
                      name={Sensor.sensorname}
                      value={Sensor.sensordata}
                    />
                  );
                }
              })
            : null}
        </div>
    );
}

export default ListSensors;