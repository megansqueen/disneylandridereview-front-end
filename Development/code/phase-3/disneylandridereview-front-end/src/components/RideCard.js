import React, {useEffect} from 'react';
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
    setRides,
    reviewState,
    setReviewState
}) {
    
    const {id, image, name, park, reviews} = ride

    useEffect(() => {
      rides.map((ride) => {
        const id = ride.id
      })
      fetch(`http://localhost:9292/rides/${id}/reviews`)
      .then((r) => r.json())
        .then((reviewData) => setReviewState(reviewData))
    }, [])

    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
    }

    function handleDeletedReview(deletedReview) {
      console.log(reviewState)
      const remainingReviews = reviewState.filter((review) => {
          if (review.id !== deletedReview.id) {
              return review
          } else {
              return null
          }
      })
      setReviewState(remainingReviews)
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
      <Card.Body>
            <CreateReview 
                rides={rides}
                setRides={setRides}
                id={id}
                reviewState={reviewState}
                setReviewState={setReviewState}
                />
        </Card.Body>
        <ListGroup className="list-group-flush">
            {reviewState.map((review) =>
                 <ListGroup.Item sm key={review.id}>
                        <ReviewCard
                            review={review}
                            handleDeletedReview={handleDeletedReview}   
                            reviewState={reviewState}
                            setReviewState={setReviewState}           
                            />
                        </ListGroup.Item>
                        
                )}
        </ListGroup>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Ride</Button>
      </Card.Body>
    </Card>
  );
}

export default RideCard;