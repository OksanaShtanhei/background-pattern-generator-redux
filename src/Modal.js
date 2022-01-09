import React from 'react'
import {number} from './action'
import { useDispatch } from 'react-redux'

const Modal = ({el}) => {
    const dispatch = useDispatch()

    return (
        <>
            <input  className="radio-btn" 
                    type="radio" 
                    name="radio" 
                    onClick={() => dispatch(number(el))}/>
                <label htmlFor="radio">
                    {el}
                </label>  
        </>
    )
}
export default Modal