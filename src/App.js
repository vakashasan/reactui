import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import React from "react";
import BasicExample from "./Card";
import Footer from "./footer";
import MainComponent from "./Maincomponent";

class App extends React.Component {
  render() {
    return (
    <div id="mainDiv">   
   
      <Header />
      <BasicExample />
      <MainComponent />
      <Footer />


      
      </div>
    )
  }
}



export default App;
