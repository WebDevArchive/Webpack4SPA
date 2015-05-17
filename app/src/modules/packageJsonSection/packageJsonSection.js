require("./packageJsonSection.css");
import packageJson from './../packageJson/packageJson.js';

class packageJsonSection {
    constructor(options) {
      this.title = options.title;
      this.rootElement = options.rootElement;
      this.jsonSection = options.jsonSection;
      this.packageJson = new packageJson();
    }
    render () {
      var jsonSection = this.packageJson.getSection(this.jsonSection);
      var hbs = require('./packageJsonSection.hbs');
      var sectionHtml = hbs(jsonSection);
      this.rootElement.innerHTML = sectionHtml;
    }
}

export default packageJsonSection;