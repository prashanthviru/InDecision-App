
var appRoot = document.getElementById('app');

let app = {
    options: [],
    picked: ''
}

let formSubmit = (e) => {
    e.preventDefault();

    let option = e.target.option.value;
    if (option) {
        app.options.push(option);
        e.target.option.value = '';
        renderCounter();
    }
}

let pickDecision = () => {
    let indexPicked = Math.floor(Math.random() * app.options.length);
    app.picked = app.options[indexPicked];
    renderCounter();

}

let reset = () => {
    app.options = [];
    app.picked = '';
    renderCounter();
}

let renderCounter = () => {

    let template = (
        <div>
            <h1>InDecision App</h1>
            <p>Option Picked : {app.picked}</p>
            <button disabled={app.options.length == 0} onClick={pickDecision}> What shoud I do?</button >
            <button disabled={app.options.length == 0} onClick={reset}>Reset</button >
            <p>Total: {app.options.length}</p>
            <p>The Options are </p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}

renderCounter();
