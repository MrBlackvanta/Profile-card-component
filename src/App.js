import cover from "./images/bg-pattern-card.svg";
import person from "./images/image-victor.jpg";
import Card from "./components/Card";
import "./App.scss";
import Signature from "./components/Signature";

function App() {
  return (
    <div>
      <Card
        cover={cover}
        person={person}
        fName="Victor Crest"
        age={26}
        city="London"
      />
      <Signature />
    </div>
  );
}

export default App;
