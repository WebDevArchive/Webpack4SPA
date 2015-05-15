require("./index.css");
import jsonInfoSection from './modules/jsonInfoSection/jsonInfoSection.js';

var devDependencies = new jsonInfoSection({
	title: 'devDependencies:',
	rootElement: document.getElementById('devDependencies'),
	jsonFile: './package.json',
	jsonField: 'devDependencies'
});
/*
var keywords = new jsonInfoSection({
	title: 'keywords:',
	rootElement: document.getElementById('keywords'),
	jsonFile: './package.json',
	jsonField: 'keywords'
});
*/
devDependencies.render();
//keywords.render();