class Component {
    constructor(element) {
        this.element = element;
    }
    render(text) {
        this.element.innerHTML = `
            <h1>Hello from Component</h1>
            <div>
                <p>${text}</p>
            </div>
        `;
    }
}
class MathOperations {
    add(input1, input2){
        return parseInt(input1, 10)+parseInt(input2, 10);

    }
}

class CalculatorComponent extends Comment{
    constructor(element){
        super(element);
        this.element = element;
    }
    render(){
        this.element.innerHTML = `
        <h1>Hello from CalculatorComponent</h1>
        <div>
            <input type="number" name="text" id="textInput1">
            <input type="number" name="text" id="textInput2">
            <input id="add" type="button" value="add">
            <input id="sub" type="button" value="sub">
            <p id="result"></p>
        </div>
        `;
        var input1 = document.getElementById('textInput1');
        var input2 = document.getElementById('textInput2');
        var btn1 = document.getElementById('add');
        var btn2 = document.getElementById('sub');
        var result = document.getElementById('result');
        var objectclassMathOperations = new MathOperations();
        btn1.onclick = function (){
            result.innerText = objectclassMathOperations.add(input1.value, input2.value);
        }
        btn2.onclick = function (){
            result.innerText = parseInt(input1.value, 10)-parseInt(input2.value, 10);
        }
        
    }
}
var root = document.getElementById('root');
var component = new CalculatorComponent(root);
component.render();
