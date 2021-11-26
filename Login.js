import InputGroup from "./InputGroup.js";
import Register from "./Register.js";
import app from "./index.js";
class Login {
    $formLoginEL;
    $titleLoginEl;
    $btnLoginEl;
    $goToRegisterPage;
    constructor() {
        this.$formLoginEL = document.createElement("form");
        this.$formLoginEL.setAttribute(
            "class",
            "w-1/3 bg-blue-400 py-12 px-4 mx-auto mt-24 rounded-xl"
        );
        this.$titleLoginEl = document.createElement("div");
        this.$titleLoginEl.textContent = "Log in";
        this.$titleLoginEl.setAttribute("class", "text-center font-medium text-2xl");

        this.$emailEl = new InputGroup("email", "Email", "Enter your email");

        this.$passwordEl = new InputGroup(
            "password",
            "Password",
            "Enter your password"
        );

        this.$btnLoginEl = document.createElement("button");
        this.$btnLoginEl.type = "submit";
        this.$btnLoginEl.setAttribute(
            "class",
            "bg-white py-2 px-4 rounded-md font-bold"
        );
        this.$btnLoginEl.textContent = "Log in";
        this.$goToRegisterPage = document.createElement("div");
        this.$goToRegisterPage.textContent = "Go to Register";
        this.$goToRegisterPage.setAttribute("class", "text-white font-bold mt-3 w-32 bg-red-400 rounded-md hover:bg-blue-200 cursor-pointer");
        this.$goToRegisterPage.addEventListener("click", this.onGoToRegister);
    }
    onGoToRegister = () => {
        const registerScreen = new Register();
        app.setActiveScreen(registerScreen);
    };

    render(component) {
        this.$formLoginEL.appendChild(this.$titleLoginEl);
        this.$formLoginEL.appendChild(this.$emailEl.render());
        this.$formLoginEL.appendChild(this.$passwordEl.render());
        this.$formLoginEL.appendChild(this.$btnLoginEl);
        this.$formLoginEL.appendChild(this.$goToRegisterPage);
        component.appendChild(this.$formLoginEL);
    }
}

export default Login;