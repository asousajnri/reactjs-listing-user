import React from 'react';

import { StyledContainer } from './container-styles';

type WithChildren <T = {}> = T & {
  children: React.ReactNode;
};

type ContainerProps = WithChildren <{
  submit(): void;
}>;

const Container = ({ children, submit }: ContainerProps) => {
  return (
    <StyledContainer onSubmit={submit}>{children}</StyledContainer>
  );
};

export default Container;