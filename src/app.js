const appRoot = document.getElementById('app');

class InDecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.removeAllOptions = this.removeAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOptions = this.addOptions.bind(this);
        this.state = {
            options: []
        }
    }

    removeAllOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        let indexPicked = Math.floor(Math.random() * this.state.options.length);
        console.log(this.state.options[indexPicked]);
    }
    addOptions(option) {

        if (!option) {
            return "Enter valid value to add item";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Item Already exits";
        }


        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })

    }
    render() {
        const title = "Indecision App";
        const subtitle = "Lets Technology Decide What we Need";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} removeAllOptions={this.removeAllOptions} />
                <AddOption addOptions={this.addOptions} />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

Header.defaultProps = {
    title: 'InDecision App'
};



const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>Choose One</button>
        </div>
    );
}



class Options extends React.Component {


    render() {
        return (
            <div>
                <button onClick={this.props.removeAllOptions}>Remove All</button>

                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}



class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleOptions = this.handleOptions.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleOptions(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOptions(option);

        this.setState(() => {
            return {
                error
            };
        })
        e.target.option.value = "";

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOptions}>
                    <input type="text" name="option" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}



ReactDOM.render(<InDecisionApp />, appRoot);