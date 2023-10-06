const Card = (props) => {
  const { backgroundImage, heading, text } = props;
  const style = {
    background: `url(${backgroundImage}), lightgray`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "342px",
    width: "100%",
    borderRadius: "20px 20px 0 0 ",
  };

  return (
    <div className="shop-featured-collection-card">
      <div style={style}></div>
      <div className="content">
        <div>{heading}</div>
        <div>{text}</div>
      </div>
    </div>
  );
};
export default Card;
