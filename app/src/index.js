require("./index.css");
import moduleA from './modules/moduleA/moduleA.js';

var objA = new moduleA({
	param1: 'John',
	param2: 23
});

console.log(
	objA.run('A')
);
