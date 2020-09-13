import React from "react";
import { Search, X } from "react-feather";

import { StyledInput, InputWrapper } from "./input-styles";

type InputProps = {
  name: string;
  label?: string;
  inputType?: string;
  inputRef?: React.MutableRefObject<null>;
  placeholder?: string;
  researched?: boolean;
};

const Input = ({ 
  name, 
  label, 
  inputType, 
  inputRef, 
  placeholder,
  researched
}: InputProps) => {
  return (
    <StyledInput>
      {label && <label htmlFor={name}>{label}</label>}
      <InputWrapper>
        <Search color="#248cd3"/>
        <input 
          ref={inputRef}  
          type={inputType ||  'text'} 
          name={name} id={name}
          placeholder={placeholder}
        />
        {researched && <button><X color="#248cd3" /></button>}
      </InputWrapper>
    </StyledInput>
  );
};

export default Input;