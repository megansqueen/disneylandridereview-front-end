import React from "react";
import RideCard from "./RideCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RideList({
    rides,
    setRides,
    searchTerm
}) {

    const filteredRides = rides.filter ((ride) => {
        return ride.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleDeleted(deletedRide) {
        const remainingRides = filteredRides.filter((ride) => {
            if (ride.id !== deletedRide) {
                return ride
            } else {
                return null
            }
        })
        setRides(remainingRides)
    }

    return (
        <Container>
            <Row>
            {filteredRides.map((ride) => (
            <Col sm key={ride.id}>
                    
                        <RideCard
                            id={ride.id}
                            image={ride.image}
                            name={ride.name}
                            park={ride.park}
                            reviews={ride.reviews}
                            handleDeleted={handleDeleted}
                        />
            </Col>
            ))}
            </Row>
        </Container>
    )

}

export default RideList