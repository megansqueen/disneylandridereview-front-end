import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function CreateRide({ handleNewRide }) {
    const [name, setName] = useState([])
    const [image, setImage] = useState([])
    const [park, setPark] = useState([])

    function handleReset() {
        setName("")
        setImage("")
        setPark("")
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
            image: image,
            name: name,
            park: park
        }
        fetch("http://localhost:9292/rides", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(itemData),
        })
        .then((r) => r.json())
        .then((newItem) => handleNewRide(newItem))
        .then(handleReset)
    }

    return (
        <div >
        <h2>Create Ride</h2>
        <Form className="Card"onSubmit={handleSubmit}>
                    <Form.Control onChange={(e) => setName(e.target.value)}type="text" name="name" placeholder="Ride name" value={name}/>
                    <Form.Control onChange={(e) => setPark(e.target.value)}type="text" name="park" placeholder="Park" value={park}/>
                    <Form.Control onChange={(e) => setImage(e.target.value)}type="url" name="image" placeholder="Image URL" value={image}/>
                <Button type="submit">Add Park</Button>
            </Form>
      </div>
    );
  }

export default CreateRide