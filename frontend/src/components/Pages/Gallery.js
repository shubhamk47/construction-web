/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";
import Img4 from "../../assets/images/img4.png";
import Img5 from "../../assets/images/img5.png";
import Img6 from "../../assets/images/img6.png";

import Header from "../Layouts/Header";

export default function Gallery(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="Gallery">
      <Header />
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        interval="3000"
        autoPlay={true}
        showArrows={true}
      >
        <div>
          <img src={Img6} />
          <h1>Site 1</h1>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={Img5} />
          <h1>Site 2</h1>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={Img4} />
          <h1>Site 3</h1>
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Img3} />
          <h1>Site 4</h1>
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src={Img2} />
          <h1>Site 5</h1>
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}
