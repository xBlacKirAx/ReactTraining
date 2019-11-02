import React from 'react';

export const Footer = (props)=>{

    return (
        <footer className="footer mt-auto py-3  alert-info">
            <div className="container">
                <span className="text-muted">{props.footer} </span>
            </div>
        </footer>
    );
}