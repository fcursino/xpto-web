import React from 'react';
import { SelectStyle } from './styles';


const Select = ({onChange, children}) => {
    return(
        <SelectStyle onChange={onChange}>
            <select>
                {children}
            </select>
        </SelectStyle>
    )
}
export default Select;