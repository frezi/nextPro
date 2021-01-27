import styles from './index.module.scss'
import { useCallback, useReducer } from 'react'
import reducer, { initState, IStoreState } from '../../reduxs/reducer'
import { getUserInfo, changeUserInfo } from '../../reduxs/actions'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../reduxs'
export default () => {
	//1、useReducer中dispatch不会subcreibe监听变化 无法全局共享
	// const [state] = useReducer(reducer, store.getState())
	// const { mobile } = state.userInfo

	const mobile = useSelector<IStoreState, number>((state) => {
		return state.userInfo.mobile
	})
	const dispatch = useDispatch()
	const handleChangeInfo = useCallback(() => {
		// console.log(dispatch, state.userInfo.mobile, 1212)
		dispatch(changeUserInfo('mobile', mobile + 1))
	}, [mobile])
	//2、很多百度文档写useCallback函数第二个参数在这里传dispatch，其实若传dispatch，只会在更新一次，如果是layout层这种只需要一次更新是用[dispatch]
	//这里结合语境 应该是mobile更改时调用记忆函数

	return (
		<div>
			<p className={styles.titleRed}>{mobile}</p>
			<div>
				<button className={styles.titleRed} onClick={handleChangeInfo}>
					点击我改变手机号码
				</button>
			</div>

			<Link href={`/pageReduxData`}>去到另外页面访问redux</Link>
		</div>
	)
}

//3、createStore函数
const listener = {} //触发重新渲染函数render或setState函数
const createStore = (reducer: (s: any, a: any) => Object) => {
	//默认
	let state: any,
		listeners = []
	//获取state
	const getState = () => state
	//发布
	const dispatch = (action: Object) => {
		//1、新state
		state = reducer(state, action)
		// 2、更新view
		listeners.forEach((listener) => listener())
	}
	//订阅
	const subscribe = () => {
		//1、监听
		listeners.push(listener)
		// 解除监听
		return () => {
			listeners = listeners.filter((l) => l != listener)
		}
	}
	//创建store时默认设置
	dispatch({})
	//输出函数予以调用
	return {
		getState,
		dispatch,
		subscribe,
	}
}
