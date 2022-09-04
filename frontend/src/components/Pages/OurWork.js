/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from "react-responsive-carousel";
import Img1 from "../../assets/images/img1.png";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";

export default function OurWork(props) {
  return (
    <div className="OurWork" ref={props.scroll}>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        interval="3000"
        autoPlay={true}
        showArrows={true}
      >
        <div>
          <img src={Img1} />
          <h1>Site 1</h1>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Img2} />
          <h1>Site 2</h1>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Img3} />
          <h1>Site 3</h1>
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}
