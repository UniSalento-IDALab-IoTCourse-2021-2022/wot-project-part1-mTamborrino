export default class {
    constructor(params) {
        this.params = params;
        // Hide the charts when the Model page is selected
        document.getElementById("bpm").style.display="none";
        document.getElementById("tmp").style.display="none";
        document.getElementById("rsp").style.display="none";
        document.getElementById("oxy").style.display="none";
        document.getElementById("condition").style.display="none";
        document.getElementById("container3").style.display="none";
        document.getElementById("imgc").style.display="none";
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}