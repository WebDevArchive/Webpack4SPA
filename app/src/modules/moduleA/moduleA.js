require("./moduleA.css");
import moduleB from './../moduleB/moduleB.js';

class moduleA {
    constructor(options) {
        this.param1 = options.param1;
        this.param2 = options.param2;
        this.objB = new moduleB({
          param1: 'green',
          param2: 2
        });
    }
    run(param3) {
       	return {
       		'A' : `from ModuleA — param1: ${this.param1}, param2: ${this.param2}, param3: ${param3}`,
       		'B' : this.objB.run('B')
       	}
    }
}

export default moduleA;