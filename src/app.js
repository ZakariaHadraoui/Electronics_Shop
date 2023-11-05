import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react';
import { Articles } from './articlesdata';
import Button from './buttons';
import Cards from './cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const menuitems = [...new Set(Articles.map((elem) => elem.title))];


function App() {

    const [item, setItem] = useState(Articles);

    return (



        <Router>

            <Button menuitems={menuitems} />
            <Routes>
                <Route path="/category/:title" element={<Cards articles={Articles} />} />
                <Route path="/" element={<Cards articles={Articles} />} />
            </Routes>
        </Router>
    );
}

export default App;
