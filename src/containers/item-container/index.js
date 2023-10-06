import Card from "../../components/Cards";
import { data } from "../../SampleData";
import "./style.css";
import { cardTypes } from "../../util/constant";
export default (props) => {
  const { heading, button, cardType } = props;
  return (
    <>
      {cardType === cardTypes[2] ? (
        <div className="category-container">
          {data.map((item, index) => (
            <Card
              key={`${cardType}${index}item`}
              text={item.text}
              heading={item.heading}
              backgroundImage={item.backgroundImage}
              cardType={cardType}
            />
          ))}
        </div>
      ) : (
        <div className={`${cardType}-container`}>
          <div className="header">
            <div>{heading}</div>
            {button.status ? <button>{button.title}</button> : null}
          </div>
          <div className="item-container">
            {data.map((item, index) => (
              <Card
                key={`${cardType}${index}item`}
                text={item.text}
                heading={item.heading}
                backgroundImage={item.backgroundImage}
                cardType={cardType}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
