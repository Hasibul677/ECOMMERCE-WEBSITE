import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./Home.css";
import home from "../../images/home.png";
import Product from "./Product";
import { MdOutlineDirectionsRun } from "react-icons/md";
import MetaDeta from "../layout/MetaDeta";


const Home = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(()=>{

  // },[])

  const product = {
    name: "Blue Tshirt",
    images: [
      {
        url: "https://images.unsplash.com/photo-1494578379344-d6c710782a3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
    price: "$120",
    _id: "hasibul",
  };

  return (
    <div>
      <MetaDeta title="SHOPPING 1416"/>
      <Row className="banner d-flex align-items-center justify-content-center g-0 min-padding">
        <Col md={6} className="pt-5 text-center">
          <h4>
            Welcome to{" "}
            <span className="fw-bold " style={{ fontFamily: "cursive" }}>
              Shopping 1416
            </span>
          </h4>
          <h3 className="mt-3">FIND AMAZING PRODUCTS BELOW</h3>
          <a href="#product">
            <Button
              style={{ fontFamily: "cursive" }}
              className="bg-light text-dark fw-bold mt-4"
            >
              SHOPPING NOW <MdOutlineDirectionsRun className="fs-4" />
            </Button>
          </a>
        </Col>
        <Col md={5}>
          <img className="img-fluid" src={home} alt="" />
        </Col>
      </Row>
      <div className="mt-5" id="product">
        <h3 className="title-text text-center">Featured Products</h3>
        <div>
          <Product product={product} />
        </div>
      </div>
    </div>
  );
};

export default Home;
