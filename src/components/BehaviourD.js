import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getList } from '../redux/actions/actions';
import Form from './Form'
import ListItem from './ListItem';

function BehaviourD() {
  const lists = useSelector((state) => state.list)
  const dispatch = useDispatch();
  // console.log(lists);
  useEffect(() => {
    dispatch(getList("Listening"));
    console.log(lists);
  }, [])
  return (
    <div className='container'>
      <Form />
      <h2>Your Added</h2>
      <div className='row'>
        {
          lists.length !== 0 ? lists.map(function (element) {
            return <ListItem key={element._id} title={element.title} Description={element.Description} _id={element._id} />
          }) : "Nothing to show, Hurry up Add Things!!!"
        }
      </div>
    </div>
  )
}

export default BehaviourD