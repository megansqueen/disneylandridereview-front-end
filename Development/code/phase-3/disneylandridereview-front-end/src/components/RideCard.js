import React, {useState, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RideCard({    
    name,
    id,
    park,
    image,
    handleDeleted
}) {

    const[review, setReview] = useState([])
    const[writer, setWriter] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/rides/:id/reviews")
        .then((r) => r.json())
          .then((review) => setReview(review))
      }, [])
    
      const handleNewReview = (newItem) => {
        console.log(newItem)
        setReview([...review, newItem])
      }

      function handleReset() {
        setReview("")
        setWriter("")
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            review: review,
            writer: writer
        }
        fetch("http://localhost:9292/rides/:id/reviews", {
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

    function handleDeleteClick() {
        fetch(`http://localhost:9292/rides/${id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => handleDeleted(id))
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
            <Form className="Card"onSubmit={handleSubmit}>
                    <Form.Control onChange={(e) => setWriter(e.target.value)}type="text" name="writer" placeholder="Your Name" value={writer}/>
                    <Form.Control onChange={(e) => setReview(e.target.value)}type="text" name="body" placeholder="What did you think of the ride?" value={review}/>
                <Button type="submit">Add Review</Button>
            </Form>
      <Card.Body>
        <Button onClick={handleDeleteClick}variant="dark">Delete Ride</Button>
      </Card.Body>
    </Card>
  );
}

export default RideCard;