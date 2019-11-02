import React from 'react';
import { Nav1 } from './Nav1';

export const Header = (props)=>{
    // console.log(props);
    return(
        <div className="container">
            <div className="row">
                {/* <div className="col-sm alert-success text-center p-3">
                    <a href="#">{props.navbar[0]}</a>
                </div> */}
                <Nav1 nav={props.navbar[0]}/>
                <div className="col-sm alert-danger text-center p-3">
                    <a href="#">{props.navbar[1]}</a>
                </div>
                <div className="col-sm alert-dark text-center p-3">
                    <a href="#">{props.navbar[2]}</a>
                </div>
            </div>
        </div>
    );
}

