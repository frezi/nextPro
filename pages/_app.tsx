import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../reduxs'

import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
	console.log(store.getState(), 'store')
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
