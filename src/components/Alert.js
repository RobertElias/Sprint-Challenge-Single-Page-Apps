import React from 'react'

const Alert = ({ alert }) => {
    return (
        alert !== null && (
        <div className={`alert alert-${alert.type}`}>
        
        <i class="fa fa-exclamation-triangle" aria-hidden="true"/> {alert.msg}
        <p>Please enter text in the search</p>
        </div>
        )
    );
};
export default Alert;