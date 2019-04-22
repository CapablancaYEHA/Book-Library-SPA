import * as React from 'react';

import { Heading } from "./Heading.styled";
import { BaseLayout } from "./layout/BaseLayout";
class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Heading>Что за херня</Heading>
      </BaseLayout>
    );
  }
}

export default App;
