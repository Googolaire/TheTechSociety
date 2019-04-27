function multiple_of_number(n, multiple)
{
	var rN = [];
	for (let i = 1; i <= n; i++) {
		if (i % multiple == 0) {
			rN.push(i);
		}
	}

	return rN;
}
function fizz(n)
{
	var rN = [], x;
	x = multiple_of_number(n, 3);
	for (let i = 0; i < x.length ; i++) {
		rN.push("fizz");
	}

	return rN;
}
function buzz(n)
{
	var rN = [], x;
	x = multiple_of_number(n, 5);
	for (let i = 0; i < x.length ; i++) {
		console.log('fizz');
		rN.push("buzz");
	}

	return rN;
}
function fizz_buzz(n)
{
	return {
		'fizz': fizz(n),
		'buzz': buzz(n)		
	};
}

//Multiple of number example
console.log(multiple_of_number(500,7));
//Fizz example
console.log(fizz(50));
//Buzz Example
console.log(buzz(50));
//FizzBuzz example
console.log(fizz_buzz(50));
