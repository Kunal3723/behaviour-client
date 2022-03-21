import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createList } from '../redux/actions/actions';

function Form() {
    const location = useLocation();
    const dispatch = useDispatch();
    const initial = {
        title: "",
        Description: "",
        behaviour_type: location.pathname.split("/")[1]
    }
    const [formData, setFormData] = useState(initial)

    function handleSubmit(e) {
        dispatch(createList(formData));
    }
    useEffect(() => {

    }, [])

    return (
        <div><div className={`mb-3 my-2 text-`}>
            <h1>{formData.behaviour_type}</h1>
            <div><label htmlFor="exampleInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInput1" aria-describedby="textHelp" onChange={function (e) {
                    setFormData({ ...formData, title: e.target.value })
                }}></input></div>

            <div>
                <label htmlFor="exampleInputEmail1" className="form-label">Add Things to Improve</label>
                <textarea className={`form-control bg- text-`} id="myBox" rows="4" onChange={function (e) {
                    setFormData({ ...formData, Description: e.target.value })
                }}></textarea>
            </div>

            <button type='submit' className="btn btn-primary my-2" onClick={function (e) { handleSubmit(e); }}>Add</button>

        </div></div>
    )
}

export default Form