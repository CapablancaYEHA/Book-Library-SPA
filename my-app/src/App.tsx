import * as React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import { BaseLayout } from "./layout/BaseLayout";
import { BookTracker } from "./BookTracker";

import {severalBooks} from "./mock";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/" render={props => <BookTracker books={severalBooks} {...props}/>}/>
          </Switch>

        </BaseLayout>
      </BrowserRouter>
    );
  }
};

export default App;
