import React,{useState} from "react";
import "./ecomm.css";
import {
  CardGroup,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  InputGroup,
  InputGroupText,
  Input,
} from "reactstrap";

import Rating from "react-rating";

const Ecomm = () => {
  const [filterText, setFilterText] = useState("");
  const products = [
    {
      id: 1,
      rating: 3.8,
      name: "Shoes",
      price: 50,
      description: "Running shoes",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/z/r/7-pg0442-7-7-ajanta-brown-original-imah4c9mqnezgug5.jpeg?q=70",
    },
    {
      id: 2,
      rating: 3.5,
      name: "Shirt",
      price: 20,
      description: "Casual shirt",
      //different url for images
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/j/n/6/m-no-jacket-cord-combraided-original-imah7huuezyfm9hu.jpeg?q=70",
    },
    {
      id: 3,
      rating: 5.0,
      name: "Pants",
      price: 30,
      description: "Formal pants",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/f/5/r/30-tr1-b-lg-flicfol-original-imahf7taacmz6acr.jpeg?q=70",
    },
    {
      id: 4,
      rating: 4.3,
      name: "T-shirt",
      price: 10,
      description: "Casual T-shirt",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/e/s/s-t285hs-as7whdnmt-eyebogler-original-imah8zwt8bgye7dz.jpeg?q=70",
    },
    {
      id: 5,
      rating: 4.2,
      name: "Jeans",
      price: 40,
      description: "Jeans",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/jean/8/v/f/32-eps-black-03-urbano-fashion-original-imah22ffbz2v4uht.jpeg?q=70",
    },
    {
      id: 6,
      rating: 4.5,
      name: "Sweater",
      price: 60,
      description: "Sweater",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/sweater/t/q/u/xl-hoodiemen-sahuone-original-imah6g8wnfjyrmah.jpeg?q=70",
    },
    {
      id: 7,
      rating: 4.5,
      name: "Jacket",
      price: 70,
      description: "Jacket",
      imgUrl:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/8/e/q/s-1-no-mt2-jkt-arrow-print-ice-blue-white-motrex-original-imah4khgjwudddgg.jpeg?q=70",
    },
  ];



  return (
    <div>
      <InputGroup>
        <Input type="text" value={filterText} onChange={(event)=> setFilterText(event.target.value)}/>
        <InputGroupText>Search</InputGroupText>
      </InputGroup>

      <CardGroup>
        {products
        .filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase())) //products.filter((product)=>product.name.includes(filterText)).map.... --> this is the same as the above linebut fileter is case sensitive
        .map((product) => (
          <Card className="productCard" key={product.id}>
            <CardImg
              alt="Card image cap"
              src={product.imgUrl} //image url props to display image on
              top
              width="200"
              height="200"
            />
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                ${product.price}
                <div className="rating">
                  <Rating initialRating={product.rating} readonly />
                </div>
              </CardSubtitle>

              <CardText>{product.description}</CardText>

              <Button color="success">Buy Now</Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Ecomm;

