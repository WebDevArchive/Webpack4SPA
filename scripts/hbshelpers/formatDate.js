module.exports = function(date) {
	console.log('----------------' + date);
	if (date == 'now') date = new Date();
	return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
};


