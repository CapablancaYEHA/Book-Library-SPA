import * as React from 'react';

import {
  BaseLayoutContainer,
  BaseLayoutContent
} from "./BaseLayout.styled";

type BaseLayoutProps = {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <BaseLayoutContainer>
    <BaseLayoutContent>
      {children}
    </BaseLayoutContent>
  </BaseLayoutContainer>
);

export { BaseLayout };
