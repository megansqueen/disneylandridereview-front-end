import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import RidePage from "./RidePage";
import CreateRide from "./CreateRide";

function App() {
  const[rides, setRides] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/rides")
    .then((r) => r.json())
      .then((rideData) => updateRideData(rideData))
  }, [])

  // useEffect(() => {
  //   fetch("http://localhost:9292/reviews")
  //   .then((r) => r.json())
  //     .then((reviewData) => updateReviewData(reviewData))
  // }, [])

  // function updateReviewData(data) {
  //   setReviewState(data)
  // }

  function updateRideData(data) {
    setRides(data)
  }

  const handleNewRide = (newItem) => {
    console.log(newItem)
    setRides([...rides, newItem])
  }

  return (
    <div >
      <NavBar />
        <Routes>
          <Route exact path="/*" element={<RidePage rides={rides} setRides={setRides} />}/>
          <Route path="/createride" element={<CreateRide handleNewRide={handleNewRide}rides={rides} setRides={setRides}/>} />
        </Routes>
    </div>
  )

}

export default App;