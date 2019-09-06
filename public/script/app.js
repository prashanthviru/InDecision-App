"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('app');

var InDecisionApp = function (_React$Component) {
    _inherits(InDecisionApp, _React$Component);

    function InDecisionApp(props) {
        _classCallCheck(this, InDecisionApp);

        var _this = _possibleConstructorReturn(this, (InDecisionApp.__proto__ || Object.getPrototypeOf(InDecisionApp)).call(this, props));

        _this.removeAllOptions = _this.removeAllOptions.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.addOptions = _this.addOptions.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(InDecisionApp, [{
        key: "removeAllOptions",
        value: function removeAllOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var indexPicked = Math.floor(Math.random() * this.state.options.length);
            console.log(this.state.options[indexPicked]);
        }
    }, {
        key: "addOptions",
        value: function addOptions(option) {

            if (!option) {
                return "Enter valid value to add item";
            } else if (this.state.options.indexOf(option) > -1) {
                return "Item Already exits";
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision App";
            var subtitle = "Lets Technology Decide What we Need";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
                React.createElement(Options, { options: this.state.options, removeAllOptions: this.removeAllOptions }),
                React.createElement(AddOption, { addOptions: this.addOptions })
            );
        }
    }]);

    return InDecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'InDecision App'
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.handlePick },
            "Choose One"
        )
    );
};

var Options = function (_React$Component2) {
    _inherits(Options, _React$Component2);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.props.removeAllOptions },
                    "Remove All"
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText
    );
};

var AddOption = function (_React$Component3) {
    _inherits(AddOption, _React$Component3);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.handleOptions = _this3.handleOptions.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(AddOption, [{
        key: "handleOptions",
        value: function handleOptions(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.addOptions(option);

            this.setState(function () {
                return {
                    error: error
                };
            });
            e.target.option.value = "";
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
                    { onSubmit: this.handleOptions },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        { type: "submit" },
                        "Submit"
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(InDecisionApp, null), appRoot);
