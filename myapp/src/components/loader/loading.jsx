import React  from 'react';
import { Spinner, Container } from 'react-bootstrap';
const Loading = () => {
    return (
        <Container>
        <Spinner animation="border" />
        </Container>

    )
};

export default Loading;