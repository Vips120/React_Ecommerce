import React from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col, Card, Button} from "react-bootstrap";
const Shopproduct = ({ imgUrl, product }) => {
    return (
        <Container>
        <Row>
          {product.data.map(data => (
            <Col md={4} key={data._id} >
              <Card style={{ width: "18rem" }} style={{ margin: "5px" }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                  <Card.Title>{data.FirstName}</Card.Title>
                  <Card.Text>
                    {data.LastName}
                  </Card.Text>
                  <Button variant="primary"
                    as={Link}
                    to={`/product/${data._id}`}
                  >Go To Product</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
          }
        </Row>
      </Container>
    )
};

export default Shopproduct;