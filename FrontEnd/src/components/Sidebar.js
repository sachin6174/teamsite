import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setSection }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <button onClick={toggleSidebar}>
                {isOpen ? 'Hide' : 'Show'}
            </button>
            <ul>
                <li onClick={() => setSection('/')}>Home</li>
                <li onClick={() => setSection('/aboutme')}>About Me</li>
                <li onClick={() => setSection('/projects')}>Projects</li>
                <li onClick={() => setSection('/systemdesign')}>System Design</li>
                <li onClick={() => setSection('/appleDevelopment')}>Apple Development</li>
                <li onClick={() => setSection('/javascriptDevelopment')}>JavaScript Development</li>
                <li onClick={() => setSection('/rightbrain/art')}>Art</li>
                <li onClick={() => setSection('/rightbrain/literature')}>Literature</li>
                <li onClick={() => setSection('/rightbrain/songs')}>Songs</li>
            </ul>
        </div>
    );
};

export default Sidebar;
