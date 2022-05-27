import React from 'react'
import { InputStyle } from './styles'


const Input = ({name, value, placeholder}) => {
    return (
        <InputStyle>
            <input
                name={name}
                maxLength='300'
                placeholder={placeholder}
                value={value}
            />
        </InputStyle>
    )
}
export default Input;