import "./style.css";

const Card = (props) => {
  const { backgroundImage, heading, text } = props;
  const style = {
    display: "flex",
    width: "338px",
    height: "200px",
    padding: "20px 0px 20px 0px",

    alignItems: "flex-end",
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url(${backgroundImage}), lightgray`,
  };

  return (
    <div style={style} className="shop-by-category-card">
      <p>{heading}</p>
    </div>
  );
};
export default Card;
