import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from '@/types/ButtonProps';

const baseButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  border-radius: 10px;
  transition: all 0.2s ease;
  text-decoration: none;
  margin-top: 20px;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #ffb36c;
    outline-offset: 2px;
  }

  svg {
    pointer-events: none;
    width: 16px;
    height: 16px;
  }
`;

const variantStyles = {
  default: css`
    background: #ffb36c;
    color: #000;
    &:hover {
      background: #ff9e40;
    }
  `,
  destructive: css`
    background: #ff4d4f;
    color: #fff;
    &:hover {
      background: #e63b3d;
    }
  `,
  outline: css`
    background: transparent;
    border: 1px solid #ccc;
    color: #000;
    &:hover {
      background: #f5f5f5;
    }
  `,
  secondary: css`
    background: #f0f0f0;
    color: #000;
    &:hover {
      background: #e0e0e0;
    }
  `,
  ghost: css`
    background: transparent;
    color: #000;
    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  `,
  link: css`
    background: none;
    color: #ff9e40;
    text-decoration: underline;
    &:hover {
      color: #ff7a00;
    }
  `,
};

const sizeStyles = {
  default: css`
    height: 37px;
    padding: 10px 30px;
  `,
  sm: css`
    height: 32px;
    padding: 6px 16px;
    font-size: 12px;
  `,
  lg: css`
    height: 45px;
    padding: 12px 40px;
    font-size: 15px;
  `,
  icon: css`
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
  `,
};

const StyledButton = styled.button<ButtonProps>`
  ${baseButton}
  ${({ variant = 'default' }) => variantStyles[variant]}
  ${({ size = 'default' }) => sizeStyles[size]}
`;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant = 'default', size = 'default', ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : StyledButton;
    return <Comp ref={ref} variant={variant} size={size} {...props} />;
  }
);

Button.displayName = 'Button';
