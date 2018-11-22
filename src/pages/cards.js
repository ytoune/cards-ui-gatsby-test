import '../utils'
import React from 'react'
import { Cards as CardsView } from '../views/Cards'

import { combine, compose, componentFromStream } from '../utils'

import { BehaviorSubject } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

const createState = def => {
	const sub = new BehaviorSubject(def)
	return [sub, p => sub.next(p)]
}

const Cards = compose(componentFromStream)(props => {
	const [pos, setpos] = createState({})
	return combine({
		props,
		pos,
		setpos,
	}).pipe(
		map(render),
		startWith(<div>Loading...</div>)
	)
})

const render = props => {
	// console.log(props)
	return <CardsView {...props}/>
}

export default Cards
