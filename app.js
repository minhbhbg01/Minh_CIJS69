class Input {
    $inputEl;
    constructor(type, placeholder) {
        this.$inputEl = document.createElement("input");
        this.$inputEl.type = type;
        this.$inputEl.placeholder = placeholder;
    }
    render() {
        return this.$inputEl;
    }
}
class signUp {
    $title;
    constructor() {
        this.$title = document.createElement("div");
        this.$title.classList.add("title");
        this.$title.textContent = "Sign Up";
    }
    render() {
        return this.$title;
    }
}
class btn {
    $btn;
    constructor() {
        this.$btn = document.createElement("button");
        this.$btn.classList.add("btn");
        this.$btn.textContent = "Sign Up";
    }
    render() {
        return this.$btn;
    }
}
let title = new signUp();
let fullName = new Input("text", "Enter your full name");
let emailInput = new Input("email", "Enter your email");
let passwordInput = new Input("password", "Enter your password");
let confirmPassword = new Input("password", "Enter confirm password");
let signUp_btn = new btn();
document.getElementById("app").appendChild(title.render());
document.getElementById("app").appendChild(fullName.render());
document.getElementById("app").appendChild(emailInput.render());
document.getElementById("app").appendChild(passwordInput.render());
document.getElementById("app").appendChild(confirmPassword.render());
document.getElementById("app").appendChild(signUp_btn.render());