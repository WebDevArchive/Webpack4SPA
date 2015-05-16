class packageJson {
    constructor() {
        this.jsonFile = require('./../../../../package.json');
    }
    getSection (field) {
//    	var jsonString = '{' + '"jsonFieldName":' + '"' + `${field}` + '",' + '"' + `${field}` + '":' + JSON.stringify(this.jsonFile[field])  + '}';
    	var jsonString = '{' + '"' + `${field}` + '":' + JSON.stringify(this.jsonFile[field])  + '}';
		return JSON.parse(jsonString);
    }
}

export default packageJson;