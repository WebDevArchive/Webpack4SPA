require("./jsonInfoSection.css");
import jsonRender from './../jsonRender/jsonRender.js';

class jsonInfoSection {
    constructor(options) {
        this.title = options.title;
        this.rootElement = options.rootElement;
        this.jsonField = options.jsonField;
        this.jsonRender = new jsonRender({
          jsonFile: options.jsonFile,
        });
    }
    render () {
      var jsonHtml = this.jsonRender.getHtml(this.jsonField);
      var hbs = require('./jsonInfoSection.hbs');
      var infoSectionHtml = hbs(this);
      this.rootElement.innerHTML = infoSectionHtml;
      document.getElementById('content').innerHTML = jsonHtml;
    }
}

export default jsonInfoSection;