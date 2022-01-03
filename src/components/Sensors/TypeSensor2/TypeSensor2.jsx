import React from "react";
import { useState ,useEffect } from "react";
import './TypeSensor2.scss';
import WRImg from './../../../assets/images/001.png';

const TypeSensor2 =({name,value})=>{
   
    const [textValue,setTextValue]=useState({value:0,continueInterval:true});
    
    useEffect(() => { 

      if(!textValue.continueInterval){
        return;
      }

      const myInterval = setInterval(() => {
        setTextValue((state) => ({...state, value: state.value + 1 }));
      },30); 
        
      return ()=>{
        clearInterval(myInterval);
        if (textValue.value === value-1) {
          setTextValue((tv) => ({ ...tv, continueInterval: false }));
        }
      }
           
    });

    

    
    return (
      <div className="Sensor2 m-2">
        <div className="ProgressBox">
          <div className="ColorBox" style={{ "--RH": `${(100-value)*2}px` ,"--time":`${value*40}ms` }} />
          <div className="CenterBox">
            <strong>{textValue.value}%</strong>
            <img src={WRImg} alt="حجم مخزن" />
          </div>
        </div>
        <div className="footer">{name}</div>
      </div>
    );
}

export default TypeSensor2;