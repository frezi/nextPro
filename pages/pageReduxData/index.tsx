import styles from './index.module.scss'
import { useReducer } from 'react'
import reducer, { IStoreState } from '../../reduxs/reducer'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default () => {
	// const [state] = useReducer(reducer, initState)
	const mobile = useSelector<IStoreState, string>((state) => {
		console.log(state, 'state')
		return state.userInfo.mobile
	})

	return (
		<div>
			{/* ==== 为什么数据还是初始化数据 */}
			<p className={styles.titleRed}>{mobile}</p>
			<Link href={`/pageRedux`}>
				{/* {blogs.title} */}
				去到另外页面改变redux
			</Link>
		</div>
	)
}
