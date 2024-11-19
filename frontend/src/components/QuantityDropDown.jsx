import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Button } from '@mui/material';

const QuantityDropDown = () => {

    const [inputval,setInputVal]=useState(1);

    const minus=()=>{
        if(inputval<=1) setInputVal(1);
        else setInputVal(inputval-1);
    }

    const plus=()=>{
        setInputVal(inputval+1);
    }
    return (
        <>
            <div className="quantityDrop d-flex align-items-center">
                <Button onClick={minus}><FaMinus /></Button>
                <input type='text' value={inputval}></input>
                <Button onClick={plus}><FaPlus /></Button>
            </div>
        </>
    )
}

export default QuantityDropDown