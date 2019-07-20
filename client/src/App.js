import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Videos from "./components/Videos";
import Video from "./components/Video";
import AddVideo from "./components/AddVideo"
import Comments from "./components/Comments";
import MyFriends from './components/MyFriends'

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/MyFriends" component={MyFriends} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/videos/:id" component={Video} />
          <Route exact path="/addvideo" component={AddVideo} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;