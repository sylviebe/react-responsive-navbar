import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button">
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line"> </div>
    </button>
);

export default DrawerToggleButton;
