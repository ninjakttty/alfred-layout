import alfyTest from 'alfy-test'
import test from 'ava'

test(async t => {
	const alfy = alfyTest()
	const result = await alfy('full')

	t.deepEqual(result, [{ name: 'full', display: 'Full', key: 'S' }])
})
