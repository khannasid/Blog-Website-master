import axios from 'axios';

const url = 'http://localhost:9000';

export const addPost = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/user/addDetail`, data);
    } catch (err) {
        console.log("Error From Frontend in sending data", err);
    }
}



export const signUpDetail = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data);
    } catch (err) {
        console.log(err);
    }
}

export const userLoginDetails = async (data) => {
    try {
        return await axios.post(`${url}/login`, data);
    } catch (err) {
        console.log(err);
    }
}


