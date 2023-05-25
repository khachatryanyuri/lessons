////////////////////////Benchmark.js/////////////////////


function foo() {
	// operation(s) to test
}

var bench = new Benchmark(
	"foo test",				// test name
	foo,					// function to test (just contents)
	{
		// ..				// optional extra options (see docs)
	}
);

bench.hz;					// number of operations per second
bench.stats.moe;			// margin of error
bench.stats.variance;		// variance across samples


//////////////////////////Tail Call Optimization (TCO)////////////////////////

function foo(x) {
	return x;
}

function bar(y) {
	return foo( y + 1 );	// tail call
}

function baz() {
	return 1 + bar( 40 );	// not tail call
}

baz();	