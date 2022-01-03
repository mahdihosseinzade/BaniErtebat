import {React,useEffect} from "react";
import './ListButton.scss';
import CustomButton from "../CustomButton/CustomButton";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getActorsAsync } from "../../Store/Actors/ActorActions";

const ListButton=()=>{

    const dispatch=useDispatch();
    
    useEffect(() => {
      dispatch(getActorsAsync());
    }, [dispatch]);

    const Actors = useSelector((state) => state.Actors.Actors);

    return (
      <div className="container d-flex flex-row justify-content-around mb-4 mt-4">
        {Actors
          ? Actors.map((Actor) => (
              <CustomButton
                key={Actor.actorid}
                name={Actor.actorname}
                status={Actor.actorstatus}
                id={Actor.actorid}
              />
            ))
          : null}
      </div>
    );
}

export default ListButton;