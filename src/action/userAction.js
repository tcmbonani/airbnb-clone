import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "../type/userTypes";

import axios from "axios";

export const login = (email, password) => async (dispatch) =>{
    try{
        dispatch({
            type: USER_LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",     
        },
        };

        const { data } = await axios.post(
            "http://localhost:8001/auth/login",
            {email, password}, 
            config
        );

        localStorage.setItem("userInfo", JSON.stringify(data));

        dispatch({type: USER_LOGIN_SUCCESS, payload: data});
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    // Remove user information from local storage
    localStorage.removeItem("userInfo");
    
    // Dispatch the USER_LOGOUT action
    dispatch({ type: USER_LOGOUT });
};