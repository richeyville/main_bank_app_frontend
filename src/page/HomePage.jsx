import Carousel from "./Carousel";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import travel_1 from "../images/banking_image3.png";
import travel_2 from "../images/banking_image2.png";

const HomePage = () => {
  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 text-color">
            <h1>Welcome to Metro 14 Bank.</h1>
            <p>
              Whether you need to check your balance before a big play, pay bills and buy
              airtime on the move, open accounts in seconds, or access loans to fuel your
              expansion, Metro 14 Bank keeps you in total command. With 24/7 chat support
              always in your corner, the grind never has to pause. 
            </p>
            <p>
              Born from the collective vision of POD 14, Metro 14 Bank is more than just code, 
              it’s a financial revolution engineered for the bold. What began as a capstone 
              challenge for a dedicated group of engineers has evolved into a high-
              performance engine built to power your hustle.

              This is the new era of banking convenience. This is the POD 14 legacy. Welcome 
              to the revolution.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text">
              Get Started
            </Link>
          </div>
          <div className="col-md-4">
            <img
              src={travel_2}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={travel_1}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8 text-color">
            <h1 className="ms-5">The Bank That Works as Hard as You Do</h1>
            <p className="ms-5">
              Stop settling for a banking system that slows you down. Metro 14 Bank was engineered
              by the elite team at POD 14 to be the ultimate financial command center. We didn’t just
              build a bank; we architected a launchpad for your next big play.

              While legacy banks are stuck in the past, we’ve built the future from the ground up. Take
              full control of your trajectory, check your balance with a swipe, pay bills and buy
              airtime with zero friction, and open accounts or access loans the moment opportunity knocks.
            </p>
            <p className="ms-5">
              With 24/7 chat support integrated into our core, you’re never navigating the market alone.
              Join us in revolutionizing the way you interact
              with your finances, as we pave the way for a more streamlined and
              secure banking future.
            </p>
            <Link to="/user/login" className="btn bg-color custom-bg-text ms-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default HomePage;
