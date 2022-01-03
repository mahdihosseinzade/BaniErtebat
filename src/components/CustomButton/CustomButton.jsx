import {React} from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setActorAsync } from "../../Store/Actors/ActorActions";

import './CustomButton.scss';

const CustomButton =({name,status,id})=>{

    const dispatch = useDispatch();
    const handelClick = (e) => {
      e.target.className='CustomButton btn-danger';
      dispatch(
          setActorAsync(
          {
              actorid:id,
              actorstatus:status?0:1
          }
          )
      );

    };

    return status ? (
      <Button
        className="CustomButton btn-primary"
        onClick={handelClick}
      >
        {name}
      </Button>
    ) : (
      <Button
        className="CustomButton btn-secondary"
        onClick={handelClick}
      >
        {name}
      </Button>
    );
}

export default CustomButton;