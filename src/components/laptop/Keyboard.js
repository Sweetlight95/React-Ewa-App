import React from 'react';
import Button from './Button.js'


const Keyboard = (props) => {
    return (
        <div className = "keyboard">
            <button className = "button" style = {{backgroundColor: `${props.buttonColor}`}}>
                    Hi Timi
            <Button/>
            </button>
        
            <div>
            {props.name} Keyboard
            Made in    
            </div>

            <div style = {{color: "yellow", 
            textAlign: "center", fontWeight: "bold"}}>{props.madeIn}
            </div>
        </div>
    )
}

export default Keyboard;