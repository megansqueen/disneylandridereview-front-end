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

    function handleNewReview(newItem) {
        const updatedRides = rides.map((ride) => {
          if(ride.id === newItem.rideId) {
            const updatedReviews = ride.reviews.push(newItem);
            return {
              ...ride,
              reviews:
              updatedReviews
            }
          }
          return ride;
        })
        setRides(updatedRides);
    }

    return (
        <Container>
            <Row>
            {filteredRides.map((ride) => (
            <Col sm key={ride.id}>
                    
                        <RideCard
                            ride={ride}
                            id={ride.id}
                            handleDeleted={handleDeleted}
                            setRides={setRides}
                            rides={rides}
                            reviews={ride.reviews}
                            handleNewReview={handleNewReview}
                        />
            </Col>
            ))}
            </Row>
        </Container>
    )

}

export default RideList