import React from 'react';
import {Card,Button } from 'react-bootstrap';
import './Header.css'

const Header = (props) => {
    const news = props.news;
    //console.log(news);
    const {author,title,urlToImage,description} = news;
    return (
        <div className='header_container'> 
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{author}</Card.Title>
                    <Card.Text>{title}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Header;