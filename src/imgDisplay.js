// ImgDisplay.js
export default function ImgDisplay({ imgData }) {
  return (
    <div className="img-display">
      <img src={imgData} alt="Random cat image" />
    </div>
  );
}
