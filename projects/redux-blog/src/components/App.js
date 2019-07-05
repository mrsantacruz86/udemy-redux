import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import PostIndex from "./posts/PostIndex";
import PostCreate from "./posts/PostCreate";
// import PostEdit from "./posts/PostEdit";
// import PostDelete from "./posts/PostDelete";
import PostShow from "./posts/PostShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={PostIndex} />
            <Route path="/posts/new" exact component={PostCreate} />
            {/* <Route path="/posts/edit/:id" exact component={StreamEdit} />
            <Route path="/posts/delete/:id" exact component={StreamDelete} /> */}
            <Route path="/posts/:id" exact component={PostShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
