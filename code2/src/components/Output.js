import React from 'react';

export const Output = (props)=>{
    return(
        <div>
            <h4 className="alert-danger p-3" >{props.count}</h4>
        </div>
    );
}