import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteList } from "../redux/actions/actions";
function ListItem({ _id, title, Description }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteList(id));
  }
  console.log("object");
  const style={
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor:"pointer"
  }
  return (
    <div className="col-md-3" key={_id}>
      <div className="card my-3" >
        <div className="card-body">
          <div className="d-flex align-items-center">
          
            <h5  className="card-title "> <b>{title}</b> </h5>
            <i style={style} className="far fa-trash-alt mx-2" onClick={() => handleDelete(_id)}></i>
           
          </div>

          <p className="card-text">{Description}</p>

        </div>
      </div>
    </div>
  )
}

export default ListItem