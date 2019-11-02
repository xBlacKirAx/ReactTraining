import React from 'react';

export const Nav1= (props)=>{
    return (
        <div className="col-sm alert-success text-center p-3">
            <a href="#">{props.nav}</a>
        </div>
    );
}