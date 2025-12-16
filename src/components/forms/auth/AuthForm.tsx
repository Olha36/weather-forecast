import {
  Container,
  Content,
  Footer,
  Header,
} from '@/components/forms/auth/AuthForm.style';
import React, { ReactNode } from 'react';
import { Card } from '../../ui/Card';

interface AuthContainerProps {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

export const AuthForm: React.FC<AuthContainerProps> = ({
  title,
  footer,
  children,
}) => {
  return (
    <Container>
      <Card>
        <Header>
          <h2>{title}</h2>
        </Header>

        <Content>{children}</Content>

        {footer && <Footer>{footer}</Footer>}
      </Card>
    </Container>
  );
};
