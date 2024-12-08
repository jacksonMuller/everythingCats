import { useState, useEffect } from "react";
import Title from "./title";
import Info from "./Info";
import NextFact from "./nextFact";
import ImgDisplay from "./imgDisplay";
import NewImage from "./newImage";
import FooterInfo from "./footerInfo";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [img, setImg] = useState(null);

  function fetchNewFact() {
    const url = `https://meowfacts.herokuapp.com/`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r.data));
  }

  useEffect(() => {
    fetchNewFact();
  }, []);

  function fetchNewImage() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
    fetch(url)
      .then((r) => r.json())
      .then((r) => setImg(r[0].url));
  }

  useEffect(() => {
    fetchNewImage();
  }, []);

  return (
    <div className="App">
      <Title />
      <Info factInfo={data} />
      <NextFact onClick={fetchNewFact} />
      <ImgDisplay imgData={img} id="image" />
      <NewImage onClick={fetchNewImage} />
      <FooterInfo />
    </div>
  );
}
