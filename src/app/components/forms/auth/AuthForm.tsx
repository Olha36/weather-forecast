import React, { ReactNode } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
} from '@/app/components/forms/auth/AuthForm.style';
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
