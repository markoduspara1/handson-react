import Button from "../Button/Button";
import "./Landing.scss";
import LandingImg from "../../assets/images/landing.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="Landing">
      <img className="Landing-Img" src={LandingImg} alt="landing image" />
      <div className="Landing-Overlay">
        <div className="Landing-OverlayPrimary"></div>
        <div className="Landing-OverlaySecondary"></div>
      </div>
      <div className="Landing-Content">
        <div className="Landing-ContentInner">
          <h1 className="Landing-Title">Learn what matters with Speck</h1>
          <p className="Landing-Subtitle">
            Make a turnaround in your career or upgrade your current skill set
            with knowledge-based lessons from IT practice.
          </p>
          <Link to="/Courses">
            <Button modifiers={["landing"]}>Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
