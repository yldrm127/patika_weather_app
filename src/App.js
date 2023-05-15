import "./App.css";
import Header from "./components/header";
import { Weatherprovior } from "./weathercontent";
import Content from "./components/content";
function App() {
  return (
    <div className="App">
      <Weatherprovior>
        <Header />
        <Content />
      </Weatherprovior>
    </div>
  );
}
export default App;
