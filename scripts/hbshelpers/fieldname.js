module.exports = function(obj) {
	console.log('######################################');
	console.log(this);
	console.log(obj);
	obj = this;
	for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	    	console.log('key:' + key);
	    }
	}
	return '@@@er56';
};