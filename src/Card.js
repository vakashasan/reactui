import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import imageOne from "./images/2.jpg"
import imageTwo from "./images/3.jpg"
import imageThree from "./images/4.jpg"
import imageFour from "./images/5.jpg"

function BasicExample() {
  const title = [
    { title: "World Wide Web" , body: "This is Body 1. this is Body 1. This is Body 1. this is Body 1. ", img : imageOne},
    { title: "Technology" , body: "This is Body 2. this is Body 2. This is Body 2. this is Body 2.This is Body 2. this is Body 2. ", img : imageTwo},
    { title: "Services" , body: "This is Body 3. this is Body 3. This is Body 3. this is Body 3. ", img : imageThree},
    { title: "Leaders" , body: "This is Body 4. this is Body 4 This is Body 4. this is Body 4 This is Body 4. this is Body 4", img : imageFour},
  ];
  return (
      <div className="flex my-auto">
        <div className="row justify-content-center">

    {title.map((title, index) => (
        <Card style={{ width: "20rem" }} className="m-5">
        <Card.Img variant="top" src={title.img} />
        <Card.Body>
          <Card.Title>{title.title}</Card.Title>
          <Card.Text>
            {title.body}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ))}

    </div>
    </div>
  );
}

export default BasicExample;
