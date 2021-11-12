
import React from 'react';
import Casing from '../components/laptop/Casing'
import Keyboard from '../components/laptop/Keyboard'
import Screen from '../components/laptop/Screen'
import "../laptop.css"
import Button from '../components/laptop/Button'

const Laptop = (props) => {
    let {name, color, madeIn, buttonColor} = props
    return(

        <div className="laptop">    
            <Casing color = {color}/>
            <Keyboard buttonColor = {buttonColor} name = {name} madeIn = {madeIn} />
            {/* <Button/> */}
        
            
        </div>
        
    )
}
export default Laptop;