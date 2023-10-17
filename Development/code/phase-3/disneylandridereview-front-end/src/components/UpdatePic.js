import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdatePic({
    handleNewPicture,
    id
})
{

    const[newPic, setNewPic] = useState("")

    function handleReset() {
        setNewPic("")
    }

  function handleSubmit(e) {
    e.preventDefault();
    const itemData = {
        image: newPic
    }
    fetch(`http://localhost:9292/rides/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itemData),
    })
    .then((r) => r.json())
    .then((newItem) => handleNewPicture(newItem))
    .then(handleReset)
}

    return (
        <div>
            <Form className="Card"onSubmit={handleSubmit}>Select new picture
                    <Form.Control onChange={(e) => setNewPic(e.target.value)}type="url" name="image" placeholder="Image URL" value={newPic}/>
                <Button type="submit">Change Image</Button>
            </Form>
        </div>
    )
}

export default UpdatePic