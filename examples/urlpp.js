let url

try {
	url = new URL(text)
} catch (e) {
	return 'invalid URL'
}

const params  = [...url.searchParams.entries()]

const max_len = Math.max(...params.map(([key]) => key.length))

const pp_params = params
	.map(([k, v]) => `${k.padEnd(max_len)} = ${v}`)
	.join('\n')

return `host: ${url.host}\npath: ${url.pathname}\n\n${pp_params}`