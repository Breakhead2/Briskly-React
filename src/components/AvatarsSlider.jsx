import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function AvatarsSlider({ images }) {
  return (
    <>
      <p>Магазин аватаров:</p>
      <AwesomeSlider bullets={true} organicArrows={false}>
        {images?.map((item) => (
          <div key={item.id} className="avatar-item">
            <img src={item.image_url} alt="avatar" />
            <span className="cost">
              {item.cost} <i className="fa fa-bolt text-primary ml-1"></i>
            </span>
          </div>
        ))}
      </AwesomeSlider>
    </>
  );
}

export default AvatarsSlider;
