import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./components/app/";
class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 25,
      nationality: "Ukraine"
    };
    this.nextYear = this.nextYear.bind(this)
  }
  nextYear() {
    this.setState(state => ({
      years: ++state.years
    }))
  }
  render() {
    const { name, surname, link } = this.props;
    const { years, nationality} = this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>
          My name is {name}, surname - {surname}, years - {years}, nationality - {nationality}
        </h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="Ruslan" surname="Robotko" link="google.com" />
      <WhoAmI name="Oleg" surname="BNuhjk" link="google.com" />
      <WhoAmI name="Lena" surname="Dkjl" link="google.com" />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>,
  document.getElementById("root")
);
