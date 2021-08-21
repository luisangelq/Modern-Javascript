console.log("\n****** Factory ******");

// Factory creates objects based on certain conditions
class InputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    createInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
    }
}

class HTMLFactory {
    createElement(type, name) {
        switch (type) {
            case "text":
                return new InputHTML("text", name);
            case "password":
                return new InputHTML("password", name);
            default:
                return;
        }
    }
}

const element = new HTMLFactory();
const inputText = element.createElement("text", "client-name");
const inputPasswword = element.createElement("password", "Ex3673");

console.log(inputText.createInput() );
console.log(inputPasswword.createInput() );
