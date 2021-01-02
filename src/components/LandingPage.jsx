import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Figure from "react-bootstrap/Figure";
import FigureImage from "react-bootstrap/FigureImage";
import FigureCaption from "react-bootstrap/FigureCaption";



import "../App.css";
const LandingPage = () => {
  return (
    <div className="container-fluid">
      <br />
      <Jumbotron>
        
      <h1>Seller</h1>
    
      </Jumbotron>
      <hr />
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i2.wp.com/worthstart.com/wp-content/uploads/2019/11/t-shirt.jpg?fit=1000%2C696&ssl=1&resize=1280%2C720"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Shirts</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/zgZOFzsiXmE/maxresdefault.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Shirts</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/zgZOFzsiXmE/maxresdefault.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Shirts</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <h3>New Arrivals</h3> <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.ilovehopscotch.com/media/catalog/product/cache/8a1d2864ad2e6778e733cd2396fff1fb/h/-/h-fw19-bwt-026.jpg"
              />
              <Card.Body>
                <Card.Title></Card.Title>
                <b>0000</b> <tr />
                <Button variant="light">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.ilovehopscotch.com/media/catalog/product/cache/8a1d2864ad2e6778e733cd2396fff1fb/h/-/h-fw19-bwt-026.jpg"
              />
              <Card.Body>
                <Card.Title>Shirts</Card.Title>
                <b>1000
                  </b> <tr />
                <Button variant="light">Add to Cart</Button>
                
              </Card.Body>
            </Card>
            <br />
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://www.ilovehopscotch.com/media/catalog/product/cache/8a1d2864ad2e6778e733cd2396fff1fb/h/-/h-fw19-bwt-026.jpg"
              />
              <Card.Body>
                <Card.Title>Shirts</Card.Title>
                <b>2000</b> <tr />
                <Button variant="light">Add to Cart</Button>
              </Card.Body>
            </Card>
            <br />
          </div>
        </div>
      </div>
      <h3>
        <b>Premium Shirts</b>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={500}
                height={500}
                alt="171x180"
                src="data:image/jpeg;base64,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"
              />
              <Figure.Caption>
                <h5>
                  <b>Nike SB Dunk</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Shop Now</Button>{" "}
            </Figure>
          </div>
          <div className="col-md-6">
            <Figure>
              <Figure.Image
                width={472}
                height={472}
                alt="171x180"
                src="https://www.zorrojersey.org/bmz_cache/d/dc121bb7ccd1af3f7dc5f7111df504d0.image.171x180.png"
              />
              <Figure.Caption>
                <h5>
                  <b>Here!</b>
                </h5>
              </Figure.Caption>
              <Button variant="dark">Shop Now</Button>{" "}
            </Figure>
          </div>
        </div>
      </div>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <small>
              <b className="footer">@Copyright 2020</b>
            </small>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default LandingPage;
