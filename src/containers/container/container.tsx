import React from "react";

import { StyledContainer } from "./container-styles";

type WithChildren<T = {}> = T & { 
  children: React.ReactNode
};

type ContainerProps = WithChildren <{
  as?: never;
}>;

const Container = ({ as, children }: ContainerProps) => {
  return <StyledContainer as={as}>{children}</StyledContainer>
};

export default Container;