/* eslint-disable jsx-a11y/alt-text */
import { useReducer, useRef } from "react";
import axios from "axios";
// import { Form } from "antd";

export default function ProductPage() {
  // const [form] = Form.useForm();
  const inpRef1 = useRef("");
  const inpRef2 = useRef("");
  const inpRef3 = useRef("");

  const titleStyle = {
    fontSize: "24px",
    fontWeight: 600,
  };
  const subTitleStyle = {
    fontSize: "44px",
    fontWeight: 700,
  };
  const smallTextStyle = {
    fontSize: "21px",
  };
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      showcaseTitle1: "iPhone 13 Pro",
      showcaseSubTitle1: "Oh. So. Pro.",
      showcaseSmallText1: "From $41.62/mo. for 24 mo. or $999 before trade‑in",
      imgUrl1:
        "https://www.apple.com/v/home/aq/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_mediumtall_2x.jpg",
      showcaseTitle2: "iPhone 13 Pro",
      showcaseSubTitle2: "Your new superpower.",
      showcaseSmallText2: "From $29.12/mo. for 24 mo. or $699 before trade‑in",
      imgUrl2:
        "https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_mediumtall_2x.jpg",
      showcaseTitle3: "iPhone 13 SE",
      showcaseSubTitle3: "Love the power. Love the price.",
      showcaseSmallText3: "From $17.87/mo. for 24 mo. or $429 before trade‑in",
      imgUrl3:
        "https://www.apple.com/v/iphone/home/bi/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg",
    }
  );

  const onChangeImg1 = async (e) => {
    const file = e.target.files[0];
    const convertBase64 = () => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const base64Img = await convertBase64(file);
    setState({ imgUrl1: base64Img });
  };
  const onChangeImg2 = async (e) => {
    const file = e.target.files[0];
    const convertBase64 = () => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const base64Img = await convertBase64(file);
    setState({ imgUrl2: base64Img });
  };
  const onChangeImg3 = async (e) => {
    const file = e.target.files[0];
    const convertBase64 = () => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };
    const base64Img = await convertBase64(file);
    setState({ imgUrl3: base64Img });
  };
  const submitHandler = () => {
    let formData = {
      siteName: "Test Product 2",
      templateId: "1",
      activeFlag: true,
      textContents: {
        showcaseTitle1: state.showcaseTitle1,
        showcaseSubTitle1: state.showcaseSubTitle1,
        showcaseSmallText1: state.showcaseSmallText1,
        containerImg1: state.imgUrl1,
      },
    };
    // let formData = {
    //   title1: state.showcaseTitle1,
    //   subTitle1: state.showcaseSubTitle1,
    //   smallText1: state.showcaseSmallText1,
    //   imgUrl1: state.imgUrl1,
    //   title2: state.showcaseTitle2,
    //   subTitle2: state.showcaseSubTitle2,
    //   smallText2: state.showcaseSmallText2,
    //   imgUrl2: state.imgUrl2,
    //   title3: state.showcaseTitle3,
    //   subTitle3: state.showcaseSubTitle3,
    //   smallText3: state.showcaseSmallText3,
    //   imgUrl3: state.imgUrl3,
    // };
    axios.post("http://localhost:8080/save", formData).then((data) => {
      console.log(data);
    });

    console.log(formData);
  };

  return (
    <div className="ProductPage">
      <div className="OuterContainer">
        <div className="InnerContainer">
          <div className="Showcase">
            <div className="ShowcaseTextContainer">
              <input
                style={titleStyle}
                onChange={(e) => {
                  setState({ showcaseTitle1: e.target.value });
                }}
                value={state.showcaseTitle1}
              ></input>
              <input
                style={subTitleStyle}
                onChange={(e) => {
                  setState({ showcaseSubTitle1: e.target.value });
                }}
                value={state.showcaseSubTitle1}
              ></input>
              <input
                style={smallTextStyle}
                onChange={(e) => {
                  setState({ showcaseSmallText1: e.target.value });
                }}
                value={state.showcaseSmallText1}
              ></input>
            </div>
            <div className="ShowcaseImageContainer">
              <img
                width={"100%"}
                onClick={() => inpRef1.current.click()}
                src={state.imgUrl1}
              ></img>
            </div>
            <input
              onChange={onChangeImg1}
              style={{ display: "none" }}
              ref={inpRef1}
              type={"file"}
            ></input>
          </div>
          <div className="Showcase">
            <div className="ShowcaseTextContainer">
              <input
                style={titleStyle}
                onChange={(e) => {
                  setState({ showcaseTitle2: e.target.value });
                }}
                value={state.showcaseTitle2}
              ></input>
              <input
                style={subTitleStyle}
                onChange={(e) => {
                  setState({ showcaseSubTitle2: e.target.value });
                }}
                value={state.showcaseSubTitle2}
              ></input>
              <input
                style={smallTextStyle}
                onChange={(e) => {
                  setState({ showcaseSmallText2: e.target.value });
                }}
                value={state.showcaseSmallText2}
              ></input>
            </div>
            <div className="ShowcaseImageContainer">
              <img
                width={"100%"}
                onClick={() => inpRef2.current.click()}
                src={state.imgUrl2}
              ></img>
            </div>
            <input
              onChange={onChangeImg2}
              style={{ display: "none" }}
              ref={inpRef2}
              type={"file"}
            ></input>
          </div>
          <div className="Showcase2">
            <div className="ShowcaseTextContainer">
              <input
                style={titleStyle}
                onChange={(e) => {
                  setState({ showcaseTitle3: e.target.value });
                }}
                value={state.showcaseTitle3}
              ></input>
              <input
                style={subTitleStyle}
                onChange={(e) => {
                  setState({ showcaseSubTitle3: e.target.value });
                }}
                value={state.showcaseSubTitle3}
              ></input>
              <input
                style={smallTextStyle}
                onChange={(e) => {
                  setState({ showcaseSmallText3: e.target.value });
                }}
                value={state.showcaseSmallText3}
              ></input>
            </div>
            <div className="ShowcaseImageContainer">
              <img
                width={"100%"}
                onClick={() => inpRef3.current.click()}
                src={state.imgUrl3}
                height={"100%"}
              ></img>
            </div>
            <input
              onChange={onChangeImg3}
              style={{ display: "none" }}
              ref={inpRef3}
              type={"file"}
            ></input>
          </div>
          <div className="SaveButtonContainer">
            <button className="SaveButton" onClick={submitHandler}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
