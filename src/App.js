import "./App.css";
import Container from "./containers/item-container";
import { cardTypes } from "./util/constant";
function App() {
  // const { heading, button, cardType } = props;

  return (
    <div className="App">
      <Container
        heading="Shop featured collections"
        cardType={cardTypes[0]}
        button={{ status: false }}
      />
      <Container
        heading="Shop products on sale"
        cardType={cardTypes[1]}
        button={{ status: true, title: "Shop all" }}
      />
      <Container
        heading="Shop by Category"
        cardType={cardTypes[2]}
        button={{ status: false }}
      />
      <Container
        heading="Promoted online business"
        cardType={cardTypes[3]}
        button={{ status: false }}
      />
      <Container
        heading="Shop exclusive deals"
        cardType={cardTypes[4]}
        button={{ status: false }}
      />
    </div>
  );
}

export default App;
