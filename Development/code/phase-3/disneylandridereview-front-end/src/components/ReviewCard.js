import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ReviewCard({    
    handleUpdatedReview,
    review
}) {

    const {body, id, ride_id, writer, date} = review
    
    function handleDeleteClick() {
        console.log(id)
        console.log(review)
        fetch(`http://localhost:9292/rides/${ride_id}/reviews/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then((deletedReview) => handleUpdatedReview(deletedReview))
      }

  return (
    <Card>
            <ListGroup className="list-group-flush" key={id}>
                  <ListGroup.Item>Date: {date}</ListGroup.Item>
                  <ListGroup.Item>Author: {writer}</ListGroup.Item>
                  <ListGroup.Item>Review: {body}</ListGroup.Item>
            </ListGroup>
        <Button onClick={handleDeleteClick}variant="light">Delete Review</Button>

      </Card>
  );
}

export default ReviewCard;