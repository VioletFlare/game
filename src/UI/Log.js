class Log {

    _createLogDOM() {
        this.logElement = document.createElement("ul");
        this.logElement.classList.add("log");
        this.uiLayer.append(this.logElement);
    }

    _createMessage(text) {
        const date = new Date(),
            localeTimeString = date.toLocaleTimeString(),
            msg = `[${localeTimeString}] ${text}`;

        return msg;
    }

    _printMessage(text) {
        const message = this._createMessage(text),
            messageDOM = `
                <li>
                    ${message}
                </li>
            `

        this.logElement.insertAdjacentHTML("beforeend", messageDOM);
    }

    _printMOTD() {
        this._printMessage("Welcome back!")
    }

    _setup() {
        this.uiLayer = document.querySelector('.uiLayer');
    }

    create() {
        this._setup();
        this._createLogDOM();
        this._printMOTD();
    }

}

export default new Log();