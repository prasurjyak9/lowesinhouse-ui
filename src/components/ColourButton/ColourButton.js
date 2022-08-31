import React, { useState, useEffect, useRef } from 'react';
function ColourButton(props) {
    return (
        <div>
        <button onClick={props.onClick}>CHANGE COLOUR</button>
        </div>
    )
}

export default ColourButton;