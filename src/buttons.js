// Button.js

import React from 'react';
import { Link } from 'react-router-dom';


function Button({ menuitems }) {
    return (
        <div className="container-fluid d-flex flex-row justify-content-around my-3">
            <nav>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <Link to="/">All</Link>
                    </li>
                    {menuitems.map((item) => (
                        <li key={item} className="list-inline-item">
                            <Link to={`/category/${item}`}>{item}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Button;
