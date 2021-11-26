import "./app.scss";
import Topbar from "./homePage/topbar/Topbar";
import Body from "./homePage/body/Body";
// import AppPage from "./avgStocksCalc/appPage";
function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <h1>hello</h1>
      <Body></Body>
    </div>
  );
}

export default App;
