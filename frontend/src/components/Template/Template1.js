/* eslint-disable jsx-a11y/alt-text */
import Header from "../Layouts/Header";
import { Carousel } from "react-responsive-carousel";
import Img2 from "../../assets/images/img2.png";
import Img3 from "../../assets/images/img3.png";
import Img4 from "../../assets/images/img4.png";
import { useReducer } from "react";

export default function Template1() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      images: [
        {
          src: Img2,
        },
        {
          src: Img3,
        },
        {
          src: Img4,
        },
      ],
    }
  );
  return (
    <div className="Template-Container">
      <Header />
      <div className="Template-Container-1">
        <div className="Template-Title-Container">
          <h1>LEVERAGE GREENS</h1>
        </div>
        <div className="Template-Container-2">
          <div className="d-flex">
            <div className="w-50 mt-5">
              <Carousel
                showStatus={false}
                infiniteLoop={true}
                interval="3000"
                autoPlay={true}
                showArrows={true}
              >
                {state.images.map((i) => (
                  <div>
                    <img src={i.src} />
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
