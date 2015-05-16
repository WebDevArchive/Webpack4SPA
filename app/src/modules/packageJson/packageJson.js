class packageJson {
    constructor() {
        this.jsonFile = require('./../../../../package.json');
        console.log('JSON f');
        console.log(this.jsonFile);
    }
    getSection (field) {
//    	return 'kyky';
//    	var jsonString = '{' + '"jsonFieldName":' + '"' + `${field}` + '",' + '"' + `${field}` + '":' + JSON.stringify(this.jsonFile[field])  + '}';

    	var jsonString = '{' + '"' + `${field}` + '":' + JSON.stringify(this.jsonFile[field])  + '}';
    	console.log('#######################################################');
    	console.log(jsonString);
		return JSON.parse(jsonString);

//		return this.jsonFile[field];
    }
}

export default packageJson;