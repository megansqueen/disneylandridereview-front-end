import React, {useState, useEffect} from 'react';
import CreateReview from './CreateReview';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReviewList from './ReviewList';
// import Form from 'react-bootstrap/Form';

function RideCard({    
    name,
    id,
    park,
    image,
    handleDeleted,
    writer,
    reviews
}) {

    const [rideReview, setRideReview] = useState([reviews])
    
    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
      }

      function handleDeletedReviews(deletedReview) {
        const remainingReviews = rideReview.filter((review) => {
            if (review.id !== deletedReview) {
                return review
            } else {
                return null
            }
        })
        setRideReview(remainingReviews)
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
                setRideReview={setRideReview}
                rideReview={rideReview}
                />
        </Card.Body>
        <ListGroup className="list-group-flush">
                <ListGroup.Item sm key={reviews.id}>
                <ReviewList
                            writer={writer}
                            reviews={reviews}
                            rideId={id}
                            rideReview={setRideReview}
                            handleDeletedReviews={handleDeletedReviews}
                                />
                 </ListGroup.Item>
        </ListGroup>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Ride</Button>
      </Card.Body>
    </Card>
  );
}

export default RideCard;