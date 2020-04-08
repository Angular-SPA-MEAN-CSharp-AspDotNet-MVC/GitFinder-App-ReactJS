// import React from 'react'

// export default function Alert({alert}) {
//     console.log('alert info');
//     console.log(alert);
//     return (
//         // <div className={`alert-${this.props.alert.type}`}>
//         //     <i className='fas fa fa-danger'>{this.props.alert.msg}</i>
//         // </div>
//         alert !==null && (
//         <div>
//             call Alert {alert===null}
//         </div>)
//     )
// }

// export default Alert

import React, {useContext} from 'react'
import AlertContext from '../context/alert/alertContext';

export const Alert = () => {
    const alertContext = useContext(AlertContext);
    //console.log('alert info');
    //console.log(alert);

    const {alert} = alertContext;
    return (
        alert !== null && (<div className={`alert alert-${alert.type}`}>
            <i className='fas fa-info-circle'>&nbsp; {alert.msg}</i>
        </div>)
        // alert !==null && (
        // <div>
        //     call Alert {alert===null}
        // </div>)
    );
}

export default Alert
