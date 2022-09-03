/* eslint-disable jsx-a11y/alt-text */
import BackGroundImg from "../../assets/images/LandingPage.jpg";
export default function LandingPage(props) {
  return (
    <div className="LandingPage">
      <img style={{ visibility: "hidden" }} width="100%" src={BackGroundImg} />
    </div>
  );
}
