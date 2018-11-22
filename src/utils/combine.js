import { combineLatest, of, isObservable } from 'rxjs'
import { map } from 'rxjs/operators'

export const combine = dict => {
	const keys = Object.keys(dict)
	return combineLatest(
		...keys
			.map(key => {
				const r = dict[key]
				return isObservable(r) ? r : of(r)
			})
	)
		.pipe(
			map(vals =>
				vals.reduce(
					(dict, val, i) => ({
						...dict,
						[keys[i]]: val,
					}),
					{}
				)
			)
		)

}
