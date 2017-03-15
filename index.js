const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

let arr = [];
for (let i = 0; i < 1000; ++i) {
	arr[i] = i;
}

suite
.add('fast-loop', () => {
	let len = 1000;
	for (let i = 0; i < len; i++) {
    let tmp = i;
  }
})
.add('normal-loop', () => {
	for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
  }
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
