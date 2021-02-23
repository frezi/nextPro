import React from 'react'
import ReactDOM from 'react-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import Head from 'next/head'
import cln from 'classnames'
import styles from './index.module.scss'

// import 'fullpage.js/vendors/scrolloverflow'; // Optional. When using scrollOverflow:true

const originalColors = ['orange', 'blue', 'purple', 'pink']

class App extends React.Component<any, any> {
	constructor(props) {
		super(props)
		this.state = {
			sectionsColor: [...originalColors],
			fullpages: [
				{
					text: 'Section 1',
				},
				{
					text: 'Section 2',
				},
				{
					text: 'Section 3',
				},
			],
			flagSecond: false,
		}
	}

	onLeave(origin, destination, direction) {
		console.log('onLeave', { origin, destination, direction })
		// arguments are mapped in order of fullpage.js callback arguments do something
		// with the event
		if (destination.anchor == 'yellow') {
			console.log(111)
			setTimeout(() => {
				this.setState({
					flagSecond: true,
				})
			}, 1000)
		}
	}

	handleChangeColors() {
		const newColors =
			this.state.sectionsColor[0] === 'yellow'
				? [...originalColors]
				: ['yellow', 'blue', 'white']
		this.setState({
			sectionsColor: newColors,
		})
	}

	handleAddSection() {
		this.setState((state) => {
			const { fullpages } = state
			const { length } = fullpages
			fullpages.push({
				text: `section ${length + 1}`,
				id: Math.random(),
			})

			return {
				fullpages: [...fullpages],
			}
		})
	}

	handleRemoveSection() {
		this.setState((state) => {
			const { fullpages } = state
			const newPages = [...fullpages]
			newPages.pop()

			return { fullpages: newPages }
		})
	}

	moveSectionDown() {
		fullpage_api.moveSectionDown()
	}

	render() {
		const { fullpages } = this.state

		if (!fullpages.length) {
			return null
		}

		const Menu = () => (
			<div
				className="menu"
				style={{
					position: 'fixed',
					top: 0,
					zIndex: 100,
				}}
			>
				<ul className="actions">
					<li>
						<button onClick={() => this.handleAddSection()}>
							Add Section
						</button>
						<button onClick={() => this.handleRemoveSection()}>
							Remove Section
						</button>
						<button onClick={() => this.handleChangeColors()}>
							Change background colors
						</button>
						<button onClick={() => this.moveSectionDown()}>
							Move Section Down
						</button>
					</li>
				</ul>
			</div>
		)

		return (
			<div className="App">
				{/* <Head>
					<title>My styled page</title>
					<link href="./styles.css" rel="stylesheet" />
				</Head> */}
				{/* <Menu /> */}
				<ReactFullpage
					navigation
					anchors={this.state.sectionsColor}
					onLeave={this.onLeave.bind(this)}
					sectionsColor={this.state.sectionsColor}
					render={(comp) =>
						console.log('render prop change') || (
							<ReactFullpage.Wrapper>
								{fullpages.map(({ text }) => (
									<div key={text} className="section">
										<h1>{text}</h1>
									</div>
								))}

								<div
									className={cln(
										'section',
										styles.second
										// this.state.flagSecond && styles.current //====改变造成dom undefined
									)}
									id="second"
								>
									<div className={styles.shield}>
										<img
											src={require('@/assets/images/shield_1.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_2.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_3.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_4.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_5.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_6.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_7.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_8.png')}
											alt=""
										/>
										<img
											src={require('@/assets/images/shield_9.png')}
											alt=""
										/>
									</div>
								</div>
							</ReactFullpage.Wrapper>
						)
					}
				/>
			</div>
		)
	}
}

export default App
