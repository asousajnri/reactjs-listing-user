import React from "react";

import Form from "../form";

import { StyledHeader } from "./header-styles";

const Header = () => {
  const inputRef = React.useRef(null);

  const handleSubmit = () => {

  };

  return (
    <StyledHeader>
      <Form.Container submit={handleSubmit}>
        <Form.Input 
          inputRef={inputRef}
          name="search"
          inputType="text" 
          placeholder="Buscar..."
        />
      </Form.Container>
    </StyledHeader>
  );
};

export default Header;