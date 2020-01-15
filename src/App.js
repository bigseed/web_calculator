import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    showCal: "",
    toCal: "",
    checked: false
  };
  render() {
    const { checked } = this.state;
    return (
      <div
        className="calculator"
        style={checked ? styles.checkedCalculator : styles.uncheckedCalculator}
      >
        <label className="switch">
          <input
            type="checkbox"
            chekced={this.state.checked}
            onChange={this.handleChange}
          />
          <span className="slider" />
        </label>
        <div>
          <div className="result">
            <p>{this.state.showCal}</p>
          </div>
          <div className="button-area">
            <button className="btn symbol" name="C" onClick={this.handleClick}>
              C
            </button>
            <button className="btn symbol" name="(" onClick={this.handleClick}>
              (
            </button>
            <button className="btn symbol" name=")" onClick={this.handleClick}>
              )
            </button>
            <button className="btn symbol" name="/" onClick={this.handleClick}>
              ÷
            </button>
            {checked ? (
              <div className="engineeringContainer">
                <button
                  className="btn angle"
                  name="sin("
                  value="Math.sin("
                  onClick={this.handleMath}
                >
                  sin
                </button>
                <button
                  className="btn angle"
                  name="asin("
                  value="Math.asin("
                  onClick={this.handleMath}
                >
                  asin
                </button>
                <button
                  className="btn angle"
                  name="sinh("
                  value="Math.sinh("
                  onClick={this.handleMath}
                >
                  sinh
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <button className=" btn number" name="1" onClick={this.handleClick}>
              1
            </button>
            <button className=" btn number" name="2" onClick={this.handleClick}>
              2
            </button>
            <button className=" btn number" name="3" onClick={this.handleClick}>
              3
            </button>
            <button className="btn symbol" name="*" onClick={this.handleClick}>
              X
            </button>
            {checked ? (
              <div className="engineeringContainer">
                <button
                  className="btn angle"
                  name="cos("
                  value="Math.cos("
                  onClick={this.handleMath}
                >
                  cos
                </button>
                <button
                  className="btn angle"
                  name="acos("
                  value="Math.acos("
                  onClick={this.handleMath}
                >
                  acos
                </button>
                <button
                  className="btn angle"
                  name="cosh("
                  value="Math.cosh("
                  onClick={this.handleMath}
                >
                  cosh
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <button className="btn number" name="4" onClick={this.handleClick}>
              4
            </button>
            <button className="btn number" name="5" onClick={this.handleClick}>
              5
            </button>
            <button className="btn number" name="6" onClick={this.handleClick}>
              6
            </button>
            <button className="btn symbol" name="-" onClick={this.handleClick}>
              -
            </button>
            {checked ? (
              <div className="engineeringContainer">
                <button
                  className="btn angle"
                  name="tan("
                  value="Math.tan("
                  onClick={this.handleMath}
                >
                  tan
                </button>
                <button
                  className="btn angle"
                  name="atan("
                  value="Math.atan("
                  onClick={this.handleMath}
                >
                  atan
                </button>
                <button
                  className="btn angle"
                  name="tanh("
                  value="Math.tanh("
                  onClick={this.handleMath}
                >
                  tanh
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <button className="btn number" name="7" onClick={this.handleClick}>
              7
            </button>
            <button className="btn number" name="8" onClick={this.handleClick}>
              8
            </button>
            <button className="btn number" name="9" onClick={this.handleClick}>
              9
            </button>
            <button className="btn symbol" name="+" onClick={this.handleClick}>
              +
            </button>
            {checked ? (
              <div className="engineeringContainer">
                <button
                  className="btn symbol"
                  name="√("
                  value="Math.sqrt("
                  onClick={this.handleMath}
                >
                  √
                </button>
                <button
                  className="btn symbol"
                  name="exp("
                  value="Math.exp("
                  onClick={this.handleMath}
                >
                  exp
                </button>
                <button
                  className="btn const"
                  name="𝝅"
                  value="Math.PI"
                  onClick={this.handleMath}
                >
                  𝝅
                </button>
              </div>
            ) : (
              <div></div>
            )}
            <br />
            <button className="btn symbol" name="." onClick={this.handleClick}>
              .
            </button>
            <button className="btn number" name="0" onClick={this.handleClick}>
              0
            </button>
            <button className="btn symbol" name="⬅︎" onClick={this.handleClick}>
              ⬅︎
            </button>
            <button className="btn equal" name="=" onClick={this.handleClick}>
              =
            </button>
            {checked ? (
              <div className="engineeringContainer">
                <button
                  className="btn symbol"
                  name="ln("
                  value="Math.log("
                  onClick={this.handleMath}
                >
                  ln
                </button>
                <button
                  className="btn symbol"
                  name="log("
                  value="Math.log10("
                  onClick={this.handleMath}
                >
                  log
                </button>
                <button
                  className="btn const"
                  name="e"
                  value="Math.E"
                  onClick={this.handleMath}
                >
                  e
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    );
  }
  handleChange = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    });
  };
  handleMath = props => {
    const clickedName = props.target.name,
      clickedValue = props.target.value,
      showCal = this.state.showCal,
      toCal = this.state.toCal;
    this.setState({
      showCal: showCal + clickedName,
      toCal: toCal + clickedValue
    });
  };
  handleClick = props => {
    const clicked = props.target.name,
      showCal = this.state.showCal,
      toCal = this.state.toCal;
    if (clicked === "⬅︎") {
      this.setState({
        showCal: showCal.substring(0, showCal.length - 1),
        toCal: toCal.substring(0, toCal.length - 1)
      });
    } else if (clicked === "=") {
      this.setState({
        showCal: eval(toCal),
        toCal: eval(toCal)
      });
    } else if (clicked === "C") {
      this.setState({
        showCal: "",
        toCal: ""
      });
    } else {
      this.setState({
        showCal: showCal + clicked,
        toCal: toCal + clicked
      });
    }
  };
}
const styles = {
  // 버튼 1개당 80px
  checkedCalculator: {
    width: 590
  },
  uncheckedCalculator: {
    width: 350
  }
};
export default App;
