// Indice H es la cantidad de publicaciones que tiene un autor en el índice n de sus publicaciones.

// N: Cantidad de artículos
// Ci: Cantidad de citas de i-ésimo artículo
// T: Cantidad de test

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

let t = 0

const solve = (n, cases) => {
	let response = []

	for (let papers = 1; papers <= n; papers++) {
		let currentH = papers

		while (
			cases.slice(0, papers).filter((c) => c >= currentH).length <
			currentH
		) {
			currentH--
		}
		response.push(currentH)
	}

	return response
}

const main = async () => {
	t = Number(await getLine())

	for (let currentCase = 1; currentCase <= t; currentCase++) {
		let n = Number(await getLine())
		let cases = (await getLine()).split(' ').map(Number)
		const response = solve(n, cases)
		console.log(`Case #${currentCase}: ${response.join(' ')}`)
	}
}

main()
