import React from 'react'

function Alert({alert}){
return (
     alert !== null &&(
        <div className={`alert alert-${alert.type}`}>
           <p className="lead">{alert.msg}</p>     
        </div>
    )
 );
};

export default Alert;
