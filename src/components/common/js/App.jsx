import Header from "../../main/js/Header";
import "../style/App.scss";
import { header } from "../../../data/portfolio";

const App = () => {
  return (
    <div>
      <Header data={header} />
    </div>
  );
};

export default App;
