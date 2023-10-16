import React, { useState } from "react";
import RideList from "./RideList";
import Search from "./Search";

function RidePage({ 
    rides, 
    setRides
}) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(search) {
        console.log(rides)
        setSearchTerm(search)
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
            />
    </main>
  );
}

export default RidePage;