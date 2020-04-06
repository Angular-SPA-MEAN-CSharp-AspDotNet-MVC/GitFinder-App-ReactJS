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

import React from 'react'

export const Alert = ({alert}) => {
    
    console.log('alert info');
    console.log(alert);
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
