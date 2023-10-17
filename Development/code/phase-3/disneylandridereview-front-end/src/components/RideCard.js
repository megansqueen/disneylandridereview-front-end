import React from "react";
import CreateReview from './CreateReview';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReviewCard from './ReviewCard';
import UpdatePic from './UpdatePic';
import { CardBody } from "react-bootstrap";
// import Form from 'react-bootstrap/Form';

function RideCard({ 
    ride,  
    handleDeleted,
    rides,
    setRides
}) {

    const {park, id, name, reviews, image} = ride

    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
    }

  //  function handleNewReview(newItem) {
  //       const updatedRides = rides.map((ride) => {
  //         if(ride.id === newItem.rideId) {
  //           const updatedReviews = ride.reviews.push(newItem);
  //           return {
  //             ...ride,
  //             reviews:
  //             updatedReviews
  //           }
  //         }
  //         return ride;
  //       })
  //       setRides(updatedRides);
  //   }

    function handleNewPicture(newItem) {
      console.log(newItem)
      const updatedRides = rides.map((ride) => {
        if(ride.id === newItem.id) {
          return {
            ...ride,
            image:
            newItem.image
          }
        }
        return ride;
      })
      setRides(updatedRides)
    }

    const handleNewReview = (newItem) => {
      const updatedRides = rides.map((ride) => {
        if(ride.id === newItem.ride_id) {
          return {
            ...ride,
            reviews:
            [...reviews, newItem]
          }
        }
        return ride;
      })
      setRides(updatedRides)
    }

    function handleDeletedReview(deletedReview) {
      const remainingReviews = reviews.filter((review) => review.id !== deletedReview.id)
        const updatedRides = rides.map((ride) => {
          if(ride.id === deletedReview.ride_id) {
            return {
              ...ride,
              reviews:
              remainingReviews
            }
          }
          return ride;
        })
        setRides(updatedRides)
    }
    

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <CardBody>
        <UpdatePic handleNewPicture={handleNewPicture}image={image}park={park}name={name}id={id}reviews={reviews}/>
        </CardBody>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Park: {park}</ListGroup.Item>
        <ListGroup.Item>Reviews:</ListGroup.Item>
      </ListGroup>
        <ListGroup className="list-group-flush">
            {reviews.map((review) =>
                 <ListGroup.Item key={review.id}>
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
                reviews={reviews}
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