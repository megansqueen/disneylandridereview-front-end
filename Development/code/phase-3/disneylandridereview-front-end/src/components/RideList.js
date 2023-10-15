import React from "react";
import RideCard from "./RideCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RideList({
    rides,
    setRides,
    searchTerm,
    reviewState,
    setReviewState
}) {

    const filteredRides = rides.filter ((ride) => {
        return ride.name.toLowerCase().includes(searchTerm.toLowerCase())
    })

    function handleDeleted(deletedRide) {
        console.log(rides)
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
                            ride={ride}
                            handleDeleted={handleDeleted}
                            setRides={setRides}
                            rides={rides}
                            reviewState={reviewState}
                            setReviewState={setReviewState}
                        />
            </Col>
            ))}
            </Row>
        </Container>
    )

}

export default RideList