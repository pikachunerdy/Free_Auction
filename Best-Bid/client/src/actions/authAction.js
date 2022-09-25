import { child, get, ref, set } from 'firebase/database';
import history from '../history';

import { auth, db } from "../firebase/config"

import { 
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from "../constants/authConstants";

export const signUp = (userData) => async (dispatch) => {
    dispatch({ 
        type:SIGN_UP_REQUEST,
        payload: userData
    });
    
    const { 
        name,
        email,
        phone,
        password,
        cpassword
    } = userData;

    const authentication = auth.getAuth()
    return auth.createUserWithEmailAndPassword(authentication, email, password)
        .then( data => {
            let { uid } = data.user;
            auth.updateProfile(authentication.currentUser, {
                displayName: name,
            });
            set(ref(db, `Users/${uid}`), userData);

            return dispatch({ 
                type:SIGN_UP_SUCCESS,
                payload: userData
            });   
        })
        .catch(error => {
            dispatch({ 
                type:SIGN_UP_FAIL,
                payload: "The email is already in use."
            });

            throw error;
        })
};