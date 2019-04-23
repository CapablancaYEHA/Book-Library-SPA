import * as React from 'react';

import { BaseLayout } from "./layout/BaseLayout";
import { BookTracker } from "./BookTracker";

class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BookTracker />
      </BaseLayout>
    );
  }
}

export default App;
