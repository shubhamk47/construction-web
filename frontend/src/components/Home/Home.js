import Card from "../Containers/Card";
import axios from "axios";
import { useState } from 'react';



const images = [
  {
    id: 1,
    title: "Title 1",
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    id: 2,
    title: "Title 2",
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    id: 3,
    title: "Title 3",
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    id: 4,
    title: "Title 4",
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    id: 5,
    title: "Title 5",
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    id: 6,
    title: "Title 6",
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    id: 7,
    title: "Title 7",
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    id: 8,
    title: "Title 8",
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    id: 9,
    title: "Title 9",
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    id: 10,
    title: "Title 10",
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    id: 11,
    title: "Title 11",
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    id: 12,
    title: "Title 12",
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    id: 13,
    title: "Title 13",
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    id: 14,
    title: "Title 14",
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail:
      "https://www.planetware.com/photos-large/JPN/japan-mt-fuji-and-cherry-blossoms.jpg",
  },
];

export default function Home() {
  const [showcase, setShowcase] = useState();

  const sendData = () => {
    console.log("Clicked");
    axios.post('http://localhost:8080/api/showcase', {
      "productName": "Test XYZ",
      "templateId" : 1,
      "status" : true,
      "content": [
        {
          "htmlClass" : "heading1",
          "body" : "This is demo heading",
        },
        {
          "htmlClass" : "body2",
          "body" : "this is part of body"
        }
      ],
      "media": [
        {
          "htmlClass" : "media1"
        },
        {
          "htmlClass" : "media2",
        }
      ]
    }).then(function(response){
      console.log(response.data);
      displayData();
    }).catch(function(error){
      console.log(error);
    });
  }

  const displayData = ()=>{
    axios.get("http://localhost:8080/api/showcase")
    .then((response) => {
      setShowcase(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  

  return (
    <div className="Home">
      {images.map((value, key) => (
        <Card thumbnail={value.thumbnail} title={value.title} key={key} />
      ))}
      <button onClick={sendData}>Send</button>
      { showcase && showcase.productName }
      { showcase && showcase.content.map((value, key) => (
          <h1 className={ value.htmlClass } key={key}>{value.body}</h1>
      )) }
    </div>
  );
}
