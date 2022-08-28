import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Driver State Monitoring Dashboard</h1>
            <p>
                All the data gathered are visible here. Along with them, some charts are plotted.
            </p>
            <p>
                <a href="/model" data-link>View information about the model.</a>.
            </p>
        `;
    }
}