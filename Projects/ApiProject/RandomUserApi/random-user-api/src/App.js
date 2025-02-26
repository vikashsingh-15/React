import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { FaMapMarkedAlt } from "react-icons/fa";
import axios from "axios";

function App() {
  // const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99
  // const gender = Math.random() < 0.5 ? "men" : "women"; // Randomly select between "men" and "women"
  // const imageUrl = `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;

  const [details, setDetails] = useState([]);

  // const fetchDetails = async () => {
  //   const response = await axios
  //     .get("https://randomuser.me/api/")
  //     .then((response) => {
  //       console.log(response.data.results[0]);
  //       setDetails(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });s
  // };

  //shows two ways to write fetchDetails function

  const fetchDetails = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response.data.results[0]);
    setDetails(response.data.results); //inside  response we have data and inside that we have data and inside that we have results where actual data is stored n api
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className="App">
      <Container fluid className="p-5 bg-primary app">
        <Row>
          <Col className="offset-md-3" md="6">
            <Card>
              <CardBody className="text-center">
                <CardTitle tag="h1">Random User</CardTitle>
                <img
                  src={details[0]?.picture?.large}
                  alt="Random User"
                  className="img-fluid rounded-circle mb-3"
                />
                <CardText tag="div">
                  <h1>
                    <span className="pr-2">Name: </span>
                    <span className="text-muted">
                      {" "}
                      {details[0]?.name?.title} {details[0]?.name?.first}{" "}
                      {details[0]?.name?.last}
                    </span>
                  </h1>
                  <h2>
                    <span className="pr-2 pl-2">Gender:</span>
                    {/* <span className="text-muted"> {details[0]?.gender}</span> */}
                    <span className="text-muted">
                      {" "}
                      {details[0]?.gender.charAt(0).toUpperCase() +
                        details[0]?.gender.slice(1)}
                    </span>
                  </h2>
                  <h3>
                    <FaMapMarkedAlt />
                    <span className="pr-2 pl-2">City:</span>
                    <span className="text-muted">
                      {details[0]?.location?.city}
                    </span>
                  </h3>
                  <h3>
                    <span className="pr-2 pl-2">Mobile:</span>
                    <span className="text-muted">{details[0]?.phone}</span>
                  </h3>
                </CardText>
                <Button color="primary" onClick={fetchDetails}>
                  Show New User
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
