import React, {useEffect} from 'react';
import CreateReview from './CreateReview';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReviewCard from './ReviewCard';
// import Form from 'react-bootstrap/Form';

function RideCard({    
    name,
    id,
    park,
    image,
    handleDeleted,
    rides,
    setRides,
    reviews
}) {
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
      }


      function handleUpdatedReview(updatedReview) {
        const updatedRides = rides.map((ride) => {
          if(ride.reviews.includes(updatedReview)) {
            const updatedReviews = ride.reviews.filter((review) => review.id !== updatedReview.id);
            return {
              ...ride,
              reviews:
              updatedReviews
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
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Park: {park}</ListGroup.Item>
        <ListGroup.Item>Reviews:</ListGroup.Item>
      </ListGroup>
      <Card.Body>
            <CreateReview 
                rides={rides}
                setRides={setRides}
                handleUpdatedReview={handleUpdatedReview}
                id={id}
                />
        </Card.Body>
        <ListGroup className="list-group-flush">
            {reviews.map((review) =>
                 <ListGroup.Item sm key={review.id}>
                        <ReviewCard
                            review={review}
                            handleUpdatedReview={handleUpdatedReview}                   />
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