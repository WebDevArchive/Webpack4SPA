require("./jsonRender.css");

class jsonRender {
    constructor(options) {
        this.jsonFile = options.jsonFile;
    }
    getHtml (field) {
      var json = require(this.jsonFile);
      var hbs = require('./jsonRender.hbs');
      var html = hbs(json);
      return html;
    }
}

export default jsonRender;