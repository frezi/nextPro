import styles from './index.module.scss'
import { useReducer, useContext } from 'react'
import reducer, { IStoreState, initState } from '../../reduxs/reducer'
import Link from 'next/link'
import { useSelector, useStore } from 'react-redux'
import { store } from '../../reduxs'

export default () => {
	//单单只是拿数据有很多中情况
	// const [state] = useReducer(reducer, store.getState())

	// const state = store.getState()

	// const mobile = useSelector<IStoreState, number>((state) => {
	// 	return state.userInfo.mobile
	// })

	const store = useStore()

	return (
		<div>
			<p className={styles.titleRed}>
				{store.getState().userInfo.mobile}
			</p>
			<Link href={`/pageRedux`}>去到另外页面改变redux</Link>
		</div>
	)
}
