import { cardTypes } from "../../util/constant";
import Card1 from "./shop-featured-collection-card";
import Card2 from "./shop-products-on-sales-card";
import Card3 from "./shop-by-category-card";
import Card4 from "./promoted-online-business-card";
import Card5 from "./shop-exclusive-deals-card";

export default (props) => {
  const { backgroundImage, heading, text, cardType } = props;
  switch (cardType) {
    case cardTypes[0]:
      return (
        <Card1
          backgroundImage={backgroundImage}
          heading={heading}
          text={text}
        />
      );
    case cardTypes[1]:
      return (
        <Card2
          backgroundImage={backgroundImage}
          heading={heading}
          text={text}
        />
      );
    case cardTypes[2]:
      return (
        <Card3
          backgroundImage={backgroundImage}
          heading={heading}
          text={text}
        />
      );
    case cardTypes[3]:
      return (
        <Card4
          backgroundImage={backgroundImage}
          heading={heading}
          text={text}
        />
      );
    case cardTypes[4]:
      return (
        <Card5
          backgroundImage={backgroundImage}
          heading={heading}
          text={text}
        />
      );
  }
};
