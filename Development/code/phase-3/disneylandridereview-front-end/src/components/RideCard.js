import React, { useState, useEffect } from "react";
import CreateReview from './CreateReview';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReviewCard from './ReviewCard';
// import Form from 'react-bootstrap/Form';

function RideCard({ 
    ride,  
    handleDeleted,
    rides,
    setRides
}) {

    const {image, park, id, name} = ride
    const[stateReviews, setStateReviews] = useState([])

    useEffect(() => {
      fetch(`http://localhost:9292/rides/${id}/reviews`)
      .then((r) => r.json())
        .then((reviewData) => setStateReviews(reviewData))
    }, [])

    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
    }

   function handleNewReview(newItem) {
        const updatedRides = rides.map((ride) => {
          if(ride.id === newItem.rideId) {
            const updatedReviews = ride.reviews.push(newItem);
            return {
              ...ride,
              reviews:
              updatedReviews
            }
          }
          return ride;
        })
        setRides(updatedRides);
    }

    

    function handleDeletedReview(deletedReview) {
      console.log(deletedReview)
      const remainingReviews = stateReviews.filter((review) => {
          if (review.id !== deletedReview.id) {
              return review
          } else {
              return null
          }
      })
      setStateReviews(remainingReviews)
  }
    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Park: {park}</ListGroup.Item>
        <ListGroup.Item>Reviews:</ListGroup.Item>
      </ListGroup>
        <ListGroup className="list-group-flush">
            {stateReviews.map((review) =>
                 <ListGroup.Item sm key={review.id}>
                        <ReviewCard
                            review={review}
                            handleDeletedReview={handleDeletedReview}          
                            />
                        </ListGroup.Item>
                )}
        </ListGroup>
        <Card.Body>
            <CreateReview 
                rides={rides}
                setRides={setRides}
                id={id}
                stateReviews={stateReviews}
                setStateReviews={setStateReviews}
                handleNewReview={handleNewReview}
                />
        </Card.Body>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Ride</Button>
      </Card.Body>
    </Card>
  );
}

export default RideCard;