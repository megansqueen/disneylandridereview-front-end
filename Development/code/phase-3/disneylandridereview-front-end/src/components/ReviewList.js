import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ReviewCard({    
    handleDeletedReviews,
    rideId,
    setRideReview,
    rideReview,
    reviewId,
    reviews
}) {

    useEffect(() => {
        fetch(`http://localhost:9292/rides/${rideId}/reviews`)
        .then((r) => r.json())
          .then((reviews) => setRideReview(reviews))
      }, [])

    function handleDeleteClick() {
        console.log(rideId)
        fetch(`http://localhost:9292/rides/${rideId}/reviews/${reviewId}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeletedReviews(reviewId))
      }

  return (
    <Card>
        {reviews.map((review) => (
            <ListGroup className="list-group-flush" key={review.id}>
                  <ListGroup.Item>Date: {review.created_at}</ListGroup.Item>
                  <ListGroup.Item>Author: {review.writer}</ListGroup.Item>
                  <ListGroup.Item>Review: {review.body}</ListGroup.Item>
            </ListGroup>
            
        ))}
        <Button onClick={handleDeleteClick}variant="light">Delete Review</Button>

      </Card>
  );
}

export default ReviewCard;