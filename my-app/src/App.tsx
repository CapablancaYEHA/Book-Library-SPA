import * as React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import { BaseLayout } from "./layout/BaseLayout";
import { BookTracker } from "./BookTracker";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/" render={props => <BookTracker {...props}/>}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
};

export default App;
