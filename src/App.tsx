import * as React from "react";
import "./App.css";
import MyClass from "./components/MyClass";
import MyFuncComp from "./components/MyFuncComp";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyClass isMarried={true} />
        <MyFuncComp name={"Farah"} />
      </div>
    );
  }
}

export default App;
