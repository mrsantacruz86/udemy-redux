import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  // state = { resource: "posts" };
  const [resource, setResource] = useState("posts");

  return (
    <div className="App">
      <UserList />
      <div>
        <button class="ui button primary" onClick={() => setResource("posts")}>
          Posts
        </button>
        <button class="ui button primary" onClick={() => setResource("todos")}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
