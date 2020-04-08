import React, {useReducer} from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext';
import {
    SET_ALERT,
    REMOVE_ALERT 
} from '../types';

const AlertState = props => {
    const initialState = null; // just one field, directly set the value
    // If you set the about way, instead of 'initialState = {alerts: null}'
    // !!! Please make sure the reducer need to change accordingly !!!

const [state, dispatch] = useReducer(AlertReducer, initialState);

// Set the Alert
const setAlert =(msg, type) =>{
    //console.log('msg and type are: ');
    //console.log(msg);
    //console.log(type);
    dispatch({
        type: SET_ALERT,
        payload: {msg,type}
    });

    setTimeout( () => dispatch({type: REMOVE_ALERT}), 3000);

    //    setAlert({msg, type});
    //    setTimeout(()=> { setAlert(null) }, 3000);
}

return <AlertContext.Provider
    value = {{
        alert: state, //only one field, directly use the state
        setAlert
    }}>
{props.children}
</AlertContext.Provider>
}

export default AlertState;