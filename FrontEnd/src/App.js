import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import './App.css';

const App = () => {
    const [section, setSection] = useState('/');

    return (
        <div className="app">
            <Sidebar setSection={setSection} />
            <Content section={section} />
        </div>
    );
};

export default App;
