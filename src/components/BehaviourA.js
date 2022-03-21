import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getList } from '../redux/actions/actions'
import Form from './Form'
import ListItem from './ListItem'



function BehaviourA() {
    const lists = useSelector((state) => state.list)
    const dispatch = useDispatch();
    // console.log(lists);
    useEffect(() => {
        dispatch(getList("Eating"));
        console.log(lists);
    }, [])


    return (
        <>
            <div className='container my-4'>
                <div>
                    <Form />
                </div>
                <h2>Your Added</h2>
                <div className='row'>
                    {
                        lists.length !== 0 ? lists.map(function (element) {
                            return <ListItem key={element._id} title={element.title} Description={element.Description} _id={element._id} />
                        }) : "Nothing to show, Hurry up Add Things!!!"
                    }
                </div>
            </div>
        </>
    )
}

export default BehaviourA