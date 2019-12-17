import React from 'react';
import {
    GroupContainer,
    FromInputContainer,
    LabelContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <GroupContainer>
        <FromInputContainer onChange={handleChange} {...otherProps} />
        {
            label ?
            (<LabelContainer className={otherProps.value.length? 'shrink' : ''}>
            {label}
            </LabelContainer>)
            : null
        }
    </GroupContainer>
);

export default FormInput;
