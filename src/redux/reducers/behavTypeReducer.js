import { FETCH_BEHAV } from '../constants/action-Types';

export default (posts = [], action) => {
  switch (action.type) {
    
    case FETCH_BEHAV:
      return action.payload;
   
    default:
      return posts;
  }
};