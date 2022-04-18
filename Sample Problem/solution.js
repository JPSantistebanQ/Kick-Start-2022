// READ LINES
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const getLine = (function () {
	const getLineGen = (async function* () {
		for await (const line of rl) {
			yield line
		}
	})()
	return async () => (await getLineGen.next()).value
})()

// SOLVING PROBLEM
let t = 0
let n = 0 // number of candy bags
let m = 0 // number of childs
let cases = []

const solve = (candyBags = 0, childs = 0, candies = []) => {
	let remainder = 0
	//candyBags: number of candy bags
	//childs: number of childs
	//candies: Array count of candy each bags

	let total = candies.reduce((a, b) => a + b, 0)
	remainder = total % childs
	//OUTPUT
	//Case #1: candy remainder
	return remainder
}

const main = async () => {
	t = Number(await getLine())

	//console.log("t : " + t);

	for (let currentCase = 1; currentCase <= t; currentCase++) {
		//console.log('currentCase: ', + currentCase);

		;[n, m] = (await getLine()).split(' ').map(Number)
		cases = (await getLine()).split(' ').map(Number)

		//console.log("n: " + n);
		//console.log("m: " + m);
		//console.log("cases: " + cases);
		const response = solve(n, m, cases)
		console.log(`Case #${currentCase}: ${response}`)
	}
}

main()
