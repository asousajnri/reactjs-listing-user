import React from "react";

import { useViewContext } from "../../contexts/view";

import Form from "../form";
import Button from "../button";

import { StyledHeader } from "./header-styles";

const Header = () => {
  const { 
    data,
    users,
    setUsers, 
    setIsFiredSearch,  
  } = useViewContext();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if(inputRef && inputRef.current && inputRef.current.value) {
      setIsFiredSearch(true);
      const query = inputRef.current.value;

      if(users.length < data.length) setUsers(data);

      setUsers(prev => prev.filter(user => {
        return user.name.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()) || String(user.age) === query;
      }))
    }
  };

  return (
    <StyledHeader>
      <Form.Container submit={submit}>
        <Form.Input 
          inputRef={inputRef}
          name="search"
          inputType="text" 
          placeholder="Buscar..."
        />
        <Button>Buscar</Button>
      </Form.Container>
    </StyledHeader>
  );
};

export default Header;