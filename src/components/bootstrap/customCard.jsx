


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FirstComponent } from './bootstrap';
import { Dnaloader } from '../loaders/dna';
import { Circleloader } from '../loaders/circles';
import { Infinityloader } from '../loaders/infinity';
import { Customtoast } from '../toasts/toasts';
// import Heart from '../animatedheart/heart.jsx';
import { Calicon } from '../icons/calculator.jsx';

function Cards(props) {
  const {text,title}=props
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Dnaloader></Dnaloader>
        <Circleloader></Circleloader>
        <Infinityloader color={"red"} width={"300"}></Infinityloader>
        <Customtoast message={"I am card"} position={"top-right"}></Customtoast>
        {/* <Heart></Heart> */}
        <Calicon size={"50"}></Calicon>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;