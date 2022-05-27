import React from 'react'
import { ButtonStyle } from './styles'

const Button = ({onClick, onSubmit, text}) => {
    return (
        <ButtonStyle>
            <button onClick={onClick} onSubmit={onSubmit}>{text}</button>
        </ButtonStyle>
    )
}
export default Button;