import * as React from 'react';

import {
  Container
} from "./BaseLayout.styled";

type BaseLayoutProps = {
  children: React.ReactElement[];
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <Container>
    {children}
  </Container>
);

export { BaseLayout };
