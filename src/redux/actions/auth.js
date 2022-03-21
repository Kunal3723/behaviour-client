import { AUTH } from "../constants/action-Types"
import * as api from '../../api/index.js';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        navigate("/");
      
    } catch (error) {
       alert("Wrong Credentials");
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        navigate("/");
      
    } catch (error) {
      
        console.log(error);
    }
};

