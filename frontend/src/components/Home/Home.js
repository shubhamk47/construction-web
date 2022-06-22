import Card from "../Containers/Card";
import axios from "axios";
import { useState } from "react";

const images = [];

export default function Home() {
  const [showcase, setShowcase] = useState();

  const sendData = () => {
    console.log("Clicked");
    axios
      .post("http://localhost:8080/api/showcase", {
        productName: "Test XYZ",
        templateId: 1,
        status: true,
        content: [
          {
            htmlClass: "heading1",
            body: "This is demo heading",
          },
          {
            htmlClass: "body2",
            body: "this is part of body",
          },
        ],
        media: [
          {
            htmlClass: "media1",
          },
          {
            htmlClass: "media2",
          },
        ],
      })
      .then(function (response) {
        console.log(response.data);
        displayData();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const displayData = () => {
    axios
      .get("http://localhost:8080/api/showcase")
      .then((response) => {
        setShowcase(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Home">
      {images.map((value, key) => (
        <Card thumbnail={value.thumbnail} title={value.title} key={key} />
      ))}
      <button onClick={sendData}>Send</button>
      {showcase && showcase.productName}
      {showcase &&
        showcase.content.map((value, key) => (
          <h1 className={value.htmlClass} key={key}>
            {value.body}
          </h1>
        ))}
    </div>
  );
}
