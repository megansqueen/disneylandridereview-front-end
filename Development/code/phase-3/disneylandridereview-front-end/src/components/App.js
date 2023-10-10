import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[rides, setRides] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rides")
    .then((r) => r.json())
      .then((rides) => setRides(rides))
  }, [])

  const handleNewRide = (newItem) => {
    console.log(newItem)
  }

  return (
    <div>
      <NavBar />
        <Routes>
          <Route />
        </Routes>
    </div>
  )

}

export default App;