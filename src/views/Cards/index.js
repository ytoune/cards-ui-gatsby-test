import React from 'react'
import Layout from '../../components/layout'

import {
	withStyles,
	Paper,
} from '@material-ui/core'

const Display = withStyles({
	root: {
		'-moz-perspective': 500,
		'-webkit-perspective': 500,
		'-o-perspective': 500,
		'-ms-perspective': 500,
		perspective: 500,
		transformStyle: 'preserve-3d',
		'& *': {
			transformStyle: 'preserve-3d',
		},
		overflow: 'hidden',
		minWidth: '100%',
		minHeight: '60vh',
		'& > *': {
			position: 'absolute',
			bottom: '-10%',
			left: '-50%',
			right: '-50%',
			minWidth: '200%',
			minHeight: '120vh',
			transform: 'rotateX(30deg)',
			transformOrigin: 'center bottom',
			background: 'gray',
		},
	}
})(({classes: {root}, children}) => (
	<Paper>
		<div className={root}>
			<div>{children}</div>
		</div>
	</Paper>
))

const dump = o => Object.entries(o)
	.reduce((s, [k, v]) => `${s}\n${k}: ${v}`, '')

export const Cards = ({
	pos,
	setpos,
}) => (
	<Layout>
		<Display>
			<div style={s} onMouseMove={onMouseMove(setpos)}>
				<Card style={{bottom: '10%', left: '15%', fontSize: 10}}>
					<pre style={{padding: 0, position: 'relative', top: -50}}>{dump(pos)}</pre>
				</Card>
				<Card style={{bottom: '10%', left: '25%'}}>
					hoge
				</Card>
				<Card style={{bottom: '60%', left: '25%'}}>
					hoge
				</Card>
			</div>
		</Display>
	</Layout>
)

const onMouseMove = setpos => e => {
	const r = {}
	for (const k in e) {
		if (/[XY]$/u.test(k)) {
			r[k] = e[k]
		}
	}
	setpos(r)
}

const s = {
	minWidth: '200%',
	minHeight: '120vh',
	textAlign: 'center',
	paddingTop: 200,
}

const COL = '255, 0, 0'
const Card = withStyles({
	root: {
		transform: 'translateZ(30px) rotateX(0deg) scale(1)',
		transition: 'transform .5s, box-shadow .1s',
		transformOrigin: 'center bottom',
		'&:hover': {
			transform: 'translateZ(30px) rotateX(-20deg) scale(1.2)',
		},
		'&:hover::after': {
			position: 'absolute',
			top: 0, bottom: 0, left: 0, right: 0,
			display: 'block',
			content: '""',
			boxShadow: `0px 6px 6px -3px rgba(${COL}, 0.2),0px 10px 14px 1px rgba(${COL}, 0.14),0px 4px 18px 3px rgba(${COL}, 0.12)`,
		}
	}
})(({style, ...props}) => (
	<Paper
		elevation={10}
		{...props}
		style={{
			position: 'absolute',
			width: '5%',
			height: '12vh',
			margin: 'auto',
			...style,
		}}
	/>
))
