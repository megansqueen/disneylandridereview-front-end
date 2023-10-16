import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateReview({ 
    id,
    handleNewReview,
    setRides,
    rides,
    stateReviews,
    setStateReviews
}) 

{
    const [author, setAuthor] = useState([])
    const [body, setBody] = useState([])

    function handleReset() {
        setBody("")
        setAuthor("")
    }

    // function handleNewReview(newItem) {
    //     const updatedRides = rides.map((ride) => {
    //       if(ride.id === newItem.rideId) {
    //         const updatedReviews = ride.reviews.push(newItem);
    //         return {
    //           ...ride,
    //           reviews:
    //           updatedReviews
    //         }
    //       }
    //       return ride;
    //     })
    //     setRides(updatedRides)
    // }



    // function handleNewReview(newReview){
    //     console.log(newReview)
    //     const updatedReviews = stateReviews.push([newReview])
    //     console.log([updatedReviews])
    //   }

    function handleSubmit(e) {
        // e.preventDefault();
        const itemData = {
            writer: author,
            body: body,
            ride_id: id
        }
        console.log(itemData)
        fetch(`http://localhost:9292/rides/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newItem) => handleNewReview(newItem))
        .then(handleReset)
    }

    return (
        <div >
        <Form className="Card"onSubmit={handleSubmit}>Leave Review
                    <Form.Control onChange={(e) => setAuthor(e.target.value)}type="text" name="writer" placeholder="Your Name" value={author}/>
                    <Form.Control onChange={(e) => setBody(e.target.value)}type="text" name="body" placeholder="What did you think of the ride?" value={body}/>
                <Button type="submit">Add Review</Button>
            </Form>
      </div>
    )

}

export default CreateReview