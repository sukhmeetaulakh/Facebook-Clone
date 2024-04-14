import "./App.css";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import SidebarRow from "./Components/SidebarRow";
import Widget from "./Components/Widget";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <SidebarRow />

        <Feed />
        <Widget/>
      </div>
    </div>
  );
}

export default App;


// mongodb+srv://usernew:YwpmyXKhmZwNSdBn@cluster0.bjoteml.mongodb.net/gadgetcraze