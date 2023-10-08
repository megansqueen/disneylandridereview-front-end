import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
          {/* <Route exact path="/" component={Body} />
          <Route exact path="/MostLikedPost" component={MostLikedPost} />
          <Route exact path="/MostCommentPost" component={MostLikedPost} />
          <Route exact path="/:pageNo" component={Body} />
          <Route exact path="/profile/:authorId" component={AuthorPage} />
          <Route exact path="/Post/:postId" component={PostPage} /> */}
        <Footer />
        {/* <Body/> */}
      </Router>
    </div>
  )
}

export default App
