export const compose = (...fns) => {
	const fs = fns.reverse()
	return a => {
		let r = a
		for (const f of fs) r = f(r)
		return r
	}
}
