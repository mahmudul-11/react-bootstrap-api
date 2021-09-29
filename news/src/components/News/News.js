import React from 'react';
import { Button, Row, Col, Card } from 'react-bootstrap';

const News = (props) => {
    const { title, description, url, urlToImage } = props.news
    console.log(urlToImage);
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button href={url} variant='dark'>Jump to Google </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;