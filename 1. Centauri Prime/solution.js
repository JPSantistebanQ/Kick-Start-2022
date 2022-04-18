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
let kingdom = null

const solve = (kingdomName = '') => {
	if (/[y]$/i.test(kingdomName)) return 'nobody'
	//Alice if end any vowals
	return /[aeiou]$/i.test(kingdomName) ? 'Alice' : 'Bob'
}

const main = async () => {
	t = Number(await getLine())
	//console.log('t : ' + t)

	for (let currentCase = 1; currentCase <= t; currentCase++) {
		kingdom = await getLine()
		//console.log('kingdom: ' + kingdom)
		const response = solve(kingdom)
		console.log(`Case #${currentCase}: ${kingdom} is ruled by ${response}.`)
	}
}

main()
