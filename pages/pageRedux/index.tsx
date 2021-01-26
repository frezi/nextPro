import styles from './index.module.scss'
import { useCallback, useEffect, useReducer } from 'react'
import reducer, { initState } from '../../reduxs/reducer'
import { getUserInfo, changeUserInfo } from '../../reduxs/actions'
import Link from 'next/link'

export default ({ blogs }) => {
	// //test api路由
	// useEffect(() => {
	//   const data = axios.get("./api/hello.js");
	//   console.log(data, 123);
	// }, []);

	const [state, dispatch] = useReducer(reducer, initState)

	const handleChangeInfo = useCallback(() => {
		console.log(dispatch, state.userInfo.mobile, 1212)
		dispatch(changeUserInfo('mobile', state.userInfo.mobile + 1))
	}, [state.userInfo.mobile])

	return (
		<div>
			<p className={styles.titleRed}>{state.userInfo.mobile}</p>
			<p className={styles.titleRed} onClick={handleChangeInfo}>
				{/* {blogs.title} */}
				点击我改变手机号码
			</p>
			<Link href={`/pageReduxData`}>
				{/* {blogs.title} */}
				去到另外页面访问redux
			</Link>
		</div>
	)
}

//静态生成 带数据（next build）
// export const getStaticProps = async () => {
//   return {
//     props: {
//       blogs: {
//         title: "getStaticProps",
//       },
//     },
//   };
// };

//SSR 带数据 （外部API数据）
export const getServerSideProps = async ({ query }) => {
	console.log(query, 'params')

	return {
		props: {
			blogs: {
				title: 'getServerSideProps',
			},
		},
	}
}
//createStore函数
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
