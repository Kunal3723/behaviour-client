import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getBehaviours } from "../redux/actions/actions";
function Home() {
    const dispatch = useDispatch();
    const behaviours = useSelector((state) => state.behaviour);

    useEffect(() => {
        dispatch(getBehaviours());
    }, [])
    const navigate = useNavigate();
    const style = {

        width: "50px",
        height: "50px",
        
       
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-150px 0 0 -50px",

    }
    function handleClick(behaviour) {
         navigate(`${behaviour.behaviour}`);
        console.log(behaviour.behaviour);
    }
    return (
        <>
        <div style={style} >
            <div className="btn-group-vertical" role="group" aria-label="Basic example">
                {
                    behaviours.map(function (behaviour) {
                        return (
                            <button key={behaviour._id} onClick={() => { handleClick(behaviour)}} type="button" className="btn btn-outline-primary btn-lg my-2">{behaviour.behaviour}</button>
                        )
                    })
                }


            </div>
        </div>
     
        </>
    )
}

export default Home