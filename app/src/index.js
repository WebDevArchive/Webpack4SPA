require("./index.css");
import packageJsonSection from './modules/packageJsonSection/packageJsonSection.js';

var description = new packageJsonSection({
	title: 'description:',
	rootElement: document.getElementById('description'),
	jsonSection: 'description'
});

var devDependencies = new packageJsonSection({
	title: 'devDependencies:',
	rootElement: document.getElementById('devDependencies'),
	jsonSection: 'devDependencies'
});

description.render();
devDependencies.render();