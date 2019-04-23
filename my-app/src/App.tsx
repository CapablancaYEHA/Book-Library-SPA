import * as React from 'react';

import { BaseLayout } from "./layout/BaseLayout";
import { BookTracker } from "./BookTracker";

import {severalBooks} from "./mock";

class App extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BookTracker book={severalBooks} />
      </BaseLayout>
    );
  }
}

export default App;
