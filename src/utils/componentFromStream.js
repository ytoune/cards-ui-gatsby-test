import { BehaviorSubject } from 'rxjs'

import { Component } from 'react'

export const componentFromStream = mapToDOM => {
	return class ComponentFromStream extends Component {
		constructor(...p) {
			super(...p)
			this.state = { view: null }
		}
		componentDidMount() {
			const props = new BehaviorSubject(this.props)
			const stream = mapToDOM(props)
				.subscribe(view => this.setState({ view }))
			this._unsubscribe = () => {
				stream.unsubscribe()
				this._unsubscribe = null
				this._push = null
			}
			this._push = p => props.next(p)
		}
		componentWillUnmount() {
			this._unsubscribe()
		}
		componentDidUpdate(prevProps) {
			const current = this.props
			if (prevProps !== current) {
				this._push(current)
			}
		}
		render() {
			return this.state.view
		}
	}
}
