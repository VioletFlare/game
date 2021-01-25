class DialogueBox {

    constructor() {

    }

    _show() {

    }

    _hide() {

    }

    _setEvents() {
        $G.listen(
            "Dialogue::start", () => this._show()
        );
    }

    _setup() {
        this.$dialogueBox = $(`
            <article class="dialogueBox">
                <h1></h1>
                <p></p>
            </article>
        `);

        this.$uiLayer = $(".uiLayer");
    }

    create() {
        this._setup();
        this.$uiLayer.append(this.$dialogueBox);
    }

}

export default new DialogueBox();