import styles from './index.module.scss'
import { useEffect } from 'react'

export default ({ blogs }) => {
	// //test api路由
	// useEffect(() => {
	//   const data = axios.get("./api/hello.js");
	//   console.log(data, 123);
	// }, []);

	return (
		<div>
			<p className={styles.titleRed}>{blogs.title}</p>
			<p className={styles.titleRed}>{blogs.title}</p>
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
