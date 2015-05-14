require("./moduleB.css");

class moduleB {
    constructor(options) {
        this.param1 = options.param1;
        this.param2 = options.param2;
    }
    run(param3) {
       	return `from ModuleB — param1: ${this.param1}, param2: ${this.param2}, param3: ${param3}`;
    }
}

export default moduleB;