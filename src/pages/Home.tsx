import React from "react";
import HomeNavbar from "../components/Static/HomeNavbar";
import HomeFooter from "../components/Static/HomeFooter";
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
            <div className="page-content__boxes">
              <Link
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                to="/erizeler"
              >
                <Box className="home-box-1">
                  <div className="text-box">
                    <h1>
                      Minlərlə ərizə və sənədlər. Axtar, redaktə et və yüklə
                    </h1>
                    <p>Ərizələr səhifəsinə keçid etmək üçün kliklə</p>
                  </div>
                </Box>
              </Link>
              <Link className="col-lg-6 col-md-6 col-sm-12 col-xs-12" to="/cv">
                <Box className="home-box-2">
                  <div className="text-box">
                    <h1>
                      CV şablonlarını seç, məlumatları yaz, yüklə və arzuladığın
                      işi tap.
                    </h1>
                    <p>CV yarat səhifəsinə keçid etmək üçün kliklə</p>
                  </div>
                </Box>
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <HomeFooter />
    </div>
  );
};

export default Home;
