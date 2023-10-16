import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ReviewCard({    
    handleDeletedReview,
    review
}) {

    const {id, body, writer, ride_id, created_at} = review
    
    function handleDeleteClick() {
        console.log(review)
        console.log(review.body)

        fetch(`http://localhost:9292/reviews/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((deletedReview) => handleDeletedReview(deletedReview))
      }

  return (
    <Card>
            <ListGroup className="list-group-flush" key={id}>
                  <ListGroup.Item>Date: {created_at}</ListGroup.Item>
                  <ListGroup.Item>Author: {writer}</ListGroup.Item>
                  <ListGroup.Item>Review: {body}</ListGroup.Item>
            </ListGroup>
        <Button onClick={handleDeleteClick}variant="light">Delete Review</Button>

      </Card>
  );
}

export default ReviewCard;