import React, { useContext } from 'react'

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
}
//旧
// const { Provider, Consumer } = React.createContext(themes.light)

// export default () => {
// 	return (
// 		<Provider value={themes.dark}>
// 			<Toolbar />
// 		</Provider>
// 	)
// }
// function Toolbar(props) {
// 	return (
// 		<div>
// 			<ThemedButton />
// 		</div>
// 	)
// }

// function ThemedButton() {
// 	return (
// 		<Consumer>
// 			{(theme) => (
// 				<button
// 					style={{
// 						background: theme.background,
// 						color: theme.foreground,
// 					}}
// 				>
// 					I am styled by theme context!
// 				</button>
// 			)}
// 		</Consumer>
// 	)
// }
//新 react hook useContext
const ThemeContext = React.createContext(themes.light)

export default () => {
	return (
		<ThemeContext.Provider value={themes.dark}>
			<Toolbar />
		</ThemeContext.Provider>
	)
}

function Toolbar(props) {
	return (
		<div>
			<ThemedButton />
		</div>
	)
}

function ThemedButton() {
	const theme = useContext(ThemeContext)
	return (
		<button
			style={{ background: theme.background, color: theme.foreground }}
		>
			I am styled by theme context!
		</button>
	)
}
