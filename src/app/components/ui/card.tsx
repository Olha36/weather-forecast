import * as React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 600px;
  height: 534px;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 80px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 0;
`;

const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.2;
  color: #000;
`;

const Description = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

const Content = styled.div`
  flex-grow: 1;
  padding-top: 0;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0;
`;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <CardWrapper ref={ref} {...props} />);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <Header ref={ref} {...props} />);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>((props, ref) => <Title ref={ref} {...props} />);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => <Description ref={ref} {...props} />);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <Content ref={ref} {...props} />);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => <Footer ref={ref} {...props} />);
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
