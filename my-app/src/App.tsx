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
            <Route path="/" component={BookTracker}/>
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
};

{/*
  <BrowserRouter>
  <Switch>
  <Route exact path="/Home" component={Home} />
  <Route exact path="/">
    <Redirect to="/Home" />
  </Route>
  <Route exact path="/About" component={About} />

  <Route exact path="/Topics" component={TopicList} />
  <Route path="/books/:book.id" component={BookDetailed} /> - сюда я передаю проп match, который берет match.params.book.id

  </Switch>
  </BrowserRouter>
*/}

export default App;
