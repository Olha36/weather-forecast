import * as React from 'react';

import styled from 'styled-components';

const StyledInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'>
>(({ type, ...props }, ref) => {
  return <input type={type} ref={ref} {...props} />;
});
StyledInput.displayName = 'StyledInput';

export const Input = styled(StyledInput)`
  background: #e4e4e4;
  border-radius: 10px;
  height: 50px;
  padding: 0 16px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #000000;
  border: none;
  outline: none;

  &::placeholder {
    color: #ababab;
  }
`;
