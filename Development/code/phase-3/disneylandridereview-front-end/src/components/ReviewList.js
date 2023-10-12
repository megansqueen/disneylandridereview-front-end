import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ReviewCard({    
    date,
    writer,
    review,
    reviewId,
    handleDeletedReviews,
    rideId
}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${rideId}/reviews/${reviewId}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeletedReviews(reviewId))
      }

  return (
    <Card>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Date: {date}</ListGroup.Item>
        <ListGroup.Item>Author: {writer}</ListGroup.Item>
        <ListGroup.Item>Review: {review}</ListGroup.Item>
        <Button onClick={handleDeleteClick}variant="light">Delete Review</Button>
      </ListGroup>
      </Card>
  );
}

export default ReviewCard;