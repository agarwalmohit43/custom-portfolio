import Header from "../../main/js/Header";
import "../style/App.scss";
import { header } from "../../../data/portfolio";

const App = () => {
  console.log(header);
  return (
    <div>
      <Header homepage={header.homepage} title={header.title} />
    </div>
  );
};

export default App;
