try {
	return JSON.stringify(JSON.parse(text), null, '\t')
} catch (e) {
	return 'invalid JSON'
}