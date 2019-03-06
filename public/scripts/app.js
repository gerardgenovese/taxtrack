"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const obj = {
//   name: "john",
//   getName(){
//     return this.name;
//   }
// };

// const getName = obj.getName.bind(obj);
// console.log(getName())


var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);

    _this.state = {
      // options: []
      // options: props.options
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //fetching data
      console.log("componentDidMount");
      try {
        var options = JSON.parse(localStorage.getItem("options"));

        if (options) {
          this.setState(function () {
            return {
              "options": options
            };
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {

      //saving data
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("componentDidUpdate");
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("componentWillUnmount");
    }

    // handleDeleteOptions() {
    //   this.setState(() => {
    //     return {
    //       options: []
    //     }
    //   });
    // }
    //refactored

  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }

    // handleDeleteOption(optionToRemove){
    //   this.setState((prevState) => {
    //     return {
    //       options: prevState.options.filter(option => {
    //         return optionToRemove !== option;
    //       })
    //     }
    //   })
    // }
    //refactor

  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(optionToRemove) {
      this.setState(function (prevState) {
        return { options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          }) };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      console.log(this.state.options[random]);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(value) {

      if (!value) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(value) !== -1) {
        return "This option already exists";
      }

      // this.setState((prevState) => {
      //   return {
      //     options: prevState.options.concat(value)
      //   }
      // })

      //refactored
      this.setState(function (prevState) {
        return { options: prevState.options.concat(value) };
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const title = "Indecision";
      var subTitle = "Put your life in the hands of a computerr.";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subTitle: subTitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

// IndecisionApp.defaultProps = {
//   options: []
// }

var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title
    ),
    props.subTitle && React.createElement(
      "h2",
      null,
      props.subTitle
    )
  );
};

//default props
Header.defaultProps = {
  title: "Indecision"
  // class Header extends React.Component {
  //   //renders jsx
  //   render(){
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1> 
  //         <h2>{this.props.subTitle}</h2>
  //       </div>
  //     )
  //   }
  // }

};var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handlePick, disabled: !props.hasOptions },
      "What Should I Do?"
    )
  );
};

// class Action extends React.Component {
//   // handlePick() {
//   //   console.log("handle")
//   // }

//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>What Should I Do?</button>

//       </div>
//     )
//   }
// }

var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    ),
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add your options"
    ),
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOption: props.handleDeleteOption
      });
    })
  );
};

// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         {this.props.options.map(option => <Option key={option} optionText={option}/>)}

//       </div>
//     )
//   }
// }


var Option = function Option(props) {
  return React.createElement(
    "div",
    null,
    props.optionText,
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.handleDeleteOption(props.optionText);
        } },
      "Remove"
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     )
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var getValue = e.target.elements.addOption.value.trim();
      var error = this.props.handleAddOption(getValue);

      this.setState(function () {
        return { error: error };
      });
      if (!error) {
        e.target.elements.addOption.value = "";
      }

      // this.setState(() => {
      //   return {
      //     error: error
      //   }
      // })
      //refactored

    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { type: "text", name: "addOption" }),
          React.createElement(
            "button",
            null,
            "Add Option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

//stateless functional component

// const User = (props) => {
//   return(
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// };


ReactDOM.render(React.createElement(IndecisionApp, { options: ["option 1", "option 2"] }), document.getElementById("app"));
