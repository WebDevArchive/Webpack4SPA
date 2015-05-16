module.exports = function(data, options) {
	console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
	console.log(data);
	if(typeof data === "object") {
    	return options.fn(this);
  	} else {
	    return options.inverse(this);
  	}
};