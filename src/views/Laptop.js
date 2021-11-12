
import React from 'react';
import Casing from '../components/laptop/Casing'
import Keyboard from '../components/laptop/Keyboard'
// import Screen from '../components/laptop/Screen'
import "../laptop.css"

const Laptop = () => {
    return(

        <div className="laptop">    
            <Casing/>
            <Keyboard name = "Apple"/>
        </div>
        
    )
}
export default Laptop;