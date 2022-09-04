// import Card from "../Containers/Card";
// import axios from "axios";
// import { useState } from "react";

import { useEffect, useRef, useState } from "react";
import Header from "../Layouts/Header";
import AboutUs from "../Pages/AboutUs";
import ContactUs from "../Pages/ContactUs";
import LandingPage from "../Pages/LandingPage";
import OurWork from "../Pages/OurWork";

// const images = [];

export default function Home() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const ourWorkScroll = useRef(null);
  const aboutUsScroll = useRef(null);
  const contactUsScroll = useRef(null);

  const executeScrollOurWork = () => {
    ourWorkScroll.current.scrollIntoView();
  };
  const executeScrollAboutUs = () => {
    aboutUsScroll.current.scrollIntoView();
  };
  const executeScrollContactUs = () => {
    contactUsScroll.current.scrollIntoView();
  };

  // const [showcase, setShowcase] = useState();

  // const sendData = () => {
  //   console.log("Clicked");
  //   axios
  //     .post("http://localhost:8080/api/showcase", {
  //       productName: "Test XYZ",
  //       templateId: 1,
  //       status: true,
  //       content: [
  //         {
  //           htmlClass: "heading1",
  //           body: "This is demo heading",
  //         },
  //         {
  //           htmlClass: "body2",
  //           body: "this is part of body",
  //         },
  //       ],
  //       media: [
  //         {
  //           htmlClass: "media1",
  //         },
  //         {
  //           htmlClass: "media2",
  //         },
  //       ],
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       displayData();
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const displayData = () => {
  //   axios
  //     .get("http://localhost:8080/api/showcase")
  //     .then((response) => {
  //       setShowcase(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    // <div className="Home">
    //   {images.map((value, key) => (
    //     <Card thumbnail={value.thumbnail} title={value.title} key={key} />
    //   ))}
    //   <button onClick={sendData}>Send</button>
    //   {showcase && showcase.productName}
    //   {showcase &&
    //     showcase.content.map((value, key) => (
    //       <h1 className={value.htmlClass} key={key}>
    //         {value.body}
    //       </h1>
    //     ))}
    // </div>
    <div className="Home">
      <Header
        executeScrollOurWork={executeScrollOurWork}
        executeScrollAboutUs={executeScrollAboutUs}
        executeScrollContactUs={executeScrollContactUs}
        scroll={scroll}
      />
      <LandingPage executeScrollContactUs={executeScrollContactUs} />
      <OurWork scroll={ourWorkScroll} />
      <AboutUs scroll={aboutUsScroll} />
      <ContactUs scroll={contactUsScroll} />
    </div>
  );
}
