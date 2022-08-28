import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("About the model");
    }

    async getHtml() {
        return `
            <h1>About the model</h1>
            <p>
                To learn from data, Machine Learning has been used.
            </p>
        `;
    }
}