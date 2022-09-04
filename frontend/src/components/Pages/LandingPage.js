/* eslint-disable jsx-a11y/alt-text */
import BackGroundImg from "../../assets/images/LandingPage.jpg";
export default function LandingPage(props) {
  return (
    <div className="LandingPage">
      <img
        style={{
          visibility: "hidden",
          position: "relative",
          width: "100%",
          height: "100vh",
        }}
        src={BackGroundImg}
      />
      <div className="LandingPage-Container" style={{ position: "absolute" }}>
        <div className="LandingPage-Inside-Container">
          <p>A GLOBAL LEADER IN INFRANSTRUCTURE</p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>WE WILL BE HAPPY</h1>
            <h1>TO TAKE CARE OF YOUR WORK</h1>
          </div>
          <button onClick={props.executeScrollContactUs}>GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
}
