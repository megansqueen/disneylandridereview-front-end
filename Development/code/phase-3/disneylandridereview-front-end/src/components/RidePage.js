import React, { useState } from "react";
import RideList from "./RideList";
import Search from "./Search";

function RidePage({ 
    rides, 
    setRides,
    reviewState,
    setReviewState
}) {
    const [searchTerm, setSearchTerm] = useState("")
    const [word, setWord] = useState("")
    const [numb, setNumb] = useState(0)

    function handleSearch(search) {
        console.log(rides)
        setSearchTerm(search)
        }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setNumb((numb) => numb + word.length)
        setWord("")
    }

//controlled form with input field and a clickme button//
//paragraph with a 0//
//when the button is clicked, the paragraph will increment by the number of letters that were typed in to the field//

  return (
    <main>
        <Search searchTerm={searchTerm}handleSearch={handleSearch}/>
            <RideList 
                rides={rides}
                setRides={setRides}
                searchTerm={searchTerm}
                reviewState={reviewState}
                setReviewState={setReviewState}
            />
    </main>
  );
}

export default RidePage;