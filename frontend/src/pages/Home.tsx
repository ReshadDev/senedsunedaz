import React from "react";
import HomeNavbar from "../components/static/HomeNavbar";
import HomeFooter from "../components/static/HomeFooter";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Box from "../components/Box";

const Home: React.FC = () => {
  return (
    <div id="home">
      <HomeNavbar />
      <div className="page-content">
        <Container>
          <div className="page-content">
            <div className="page-content__boxes my-50">
              <Box className="col-6">
                <Link to="/erizeler">Erizeler</Link>
              </Box>
              <Box className="col-6 blue">
                <Link to="/cv">CV</Link>
              </Box>
            </div>
          </div>
        </Container>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
