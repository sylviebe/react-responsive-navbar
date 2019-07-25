import React from 'react';

import './DrawerToggleButton.css';

const DrawerToggleButton = props => (
    <button className="toggle-button" onClick={props.click}>
        <div className="toggle-button_line" />
        <div className="toggle-button_line" />
        <div className="toggle-button_line"> </div>
    </button>
);

export default DrawerToggleButton;
