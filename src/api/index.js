import axios from 'axios';

const url = 'https://behaviour-fetch.herokuapp.com';
const API = axios.create({
    baseURL: url
})

API.interceptors.request.use(function (req) {
    if (localStorage.getItem("profile")) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
   
    }
    return req;
});

export const fetchPosts = (behav_type) => API.post("/type",behav_type);
export const fetchBehaviour = () => API.get("/behaviour");
export const createPost = (formData) => API.post("/post", formData);

export const deletePost = (id) => API.delete(`/post/${id}`);

export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);