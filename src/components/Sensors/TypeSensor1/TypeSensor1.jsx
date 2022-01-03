import {React,useEffect,useState} from "react";

import "./TypeSensor1.scss";
import RHImg from './../../../assets/images/khak.png';

const TypeSensor1 = ({ name, value }) => {

  const [textValue, setTextValue] = useState({
    value: 0,
    continueInterval: true,
  });

  useEffect(() => {
    if (!textValue.continueInterval) {
      return;
    }

    const myInterval = setInterval(() => {
      setTextValue((state) => ({ ...state, value: state.value + 1 }));
    }, 30);

    return () => {
      clearInterval(myInterval);
      if (textValue.value === value - 1) {
        setTextValue((tv) => ({ ...tv, continueInterval: false }));
      }
    };
  });

  return (
    <div className="Sensor1 m-2">
      <div
        className="ProgressBox"
        style={{ "--alpha": `${value / 100}`, "--timeX": `${value * 40}ms` }}
      >
        <div className="CenterBox" style={{ backgroundImage: `url(${RHImg})` }}>
          <strong className="textValue">{textValue.value}%</strong>
          <div className="LinearProgressBox">
            <div
              className="LinearProgressBar"
              style={{ "--wh": `-${((100 - value) * 116) / 100}px` }}
            />
          </div>
        </div>
      </div>

      <div className="footer">{name}</div>
    </div>
  );
};

export default TypeSensor1;
