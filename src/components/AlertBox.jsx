import React from 'react';

function AlertBox({ msg, click }) {
    const alert = (
        <div className='alert-box'>
            <div>{msg}</div>
            <button className='OKbutton' onClick={click}>OK</button>
        </div>
    );

    return (
        <>
            {alert}
        </>
    );
}

export default AlertBox;