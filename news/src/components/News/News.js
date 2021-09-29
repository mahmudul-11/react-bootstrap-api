import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

const News = (props) => {
    const { strMeal, strInstructions, strMealThumb } = props.news

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                    <Button variant='dark'>Read Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;