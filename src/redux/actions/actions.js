import { FETCH,DELETE,CREATE, FETCH_BEHAV } from '../constants/action-Types';

import * as api from '../../api/index.js';

export const getList = (behav_type) => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(behav_type);


    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBehaviours = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBehaviour();

    dispatch({ type: FETCH_BEHAV, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createList = (formData) => async (dispatch) => {
  try {
    
    const { data } = await api.createPost(formData);
console.log(data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteList = (id) => async (dispatch) => {
  try {
     await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};



