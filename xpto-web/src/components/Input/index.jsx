import React from 'react'
import { InputStyle } from './styles'


const Input = ({name, value, placeholder, ...rest}) => {
    return (
        <InputStyle>
            <input
                name={name}
                maxLength='300'
                placeholder={placeholder}
                value={value}
                {...rest}
            />
        </InputStyle>
    )
}
export default Input;