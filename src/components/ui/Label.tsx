'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import * as React from 'react';
import styled from 'styled-components';

export const StyledLabel = styled(LabelPrimitive.Root)`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  &[data-disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => <StyledLabel ref={ref} {...props} />);

Label.displayName = 'Label';

export { Label };
