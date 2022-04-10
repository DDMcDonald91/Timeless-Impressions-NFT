import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Information from './Information.js';
import Minter from './Minter.js';
import impression1 from './images/impression1.png';
import impression2 from './images/impression2.png';
import impression3 from './images/impression3.png';
import impression4 from './images/impression4.png';
import impression5 from './images/impression5.png';
import impression8 from './images/impression8.png';




export default function Hero() {
  return(
    <Container id="hero-container" fluid>
    <Row>
    <Col id="hero">
    <div>
    <Card id="card1">
    <Carousel variant="light" fade>
      <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={impression8}
        alt="First slide"
      />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={impression1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={impression2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={impression3}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={impression4}
          alt="Fifth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src={impression5}
          alt="Sixth slide"
        />
      </Carousel.Item>
    </Carousel>
    </Card>
    <Minter />
    </div>
    </Col>
    <Col id="hero">
    <div>
    <Information />
    </div>
    </Col>
    </Row>
    </Container>
  );
}
