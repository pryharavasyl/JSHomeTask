function Component(element) {
    this._element = element;

    this.render = function(text) {
        this._element.innerHTML = `
            <h1>Hello from Component</h1>
            <div>
                <p>${text}</p>
            </div>
        `;
    }
}

var root = document.getElementById('root');
var component = new Component(root);
component.render('Hello DBI, are you asleep?');

function Typer () {
    Component.apply(this);
    this.mark = function() {
    this.element.innerHTML = `
    <div>
        <h1>Hello from component</h1>
        <h2>It is ${variable1} example</h2>
        <p>${variable1}</p>
    </div>
    `;
    }
    this.episod1 = if (this.numbervalue % 2 === 0) {
        variable1 = `good`;
    }
    else {
        variable1 = `bad`;
    }
    var numbervalue = 22;
}