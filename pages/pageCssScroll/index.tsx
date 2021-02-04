import styles from './index.module.scss'
import { useState, useEffect, useRef } from 'react'
import { useDebounceFn, useScroll, useEventListener } from 'ahooks'
import cln from 'classname'

//stage1 UI css（current选择器）
//stage2 js onscroll监测 定时器
//stage3 微调效果

export default () => {
	const [flag, setFlag] = useState(false)
	const [flagFirst, setFlagFirst] = useState(false)
	//初始化
	useEffect(() => {
		window.scrollTo(0, 0)
		let topTimer = setTimeout(() => {
			setFlag(true)
			setFlagFirst(true)
		}, 30)
		return () => {
			clearTimeout(topTimer)
		}
	}, [])

	//滚动监测动态变化 ====
	const firstRef = useRef()
	const { run: handleScroll } = useDebounceFn(
		() => {
			//滚动条滚动距离
			var scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop

			// 首屏第一个特效盒子 高度
			const firstHeight = Math.min(firstRef.current.offsetHeight)

			console.log(scrollTop > firstHeight, 999)

			// 停留在第一部分 移除current 自己加current //已经有current属性不执行
			if (scrollTop < firstHeight) {
				// flagFirst && setFlagFirst(false)
				alert(1)
			} else {
				// alert('展示第1部分啦')
				!flagFirst && setFlagFirst(true)
				// if (!firstRef.current.classList.contains('current')) {
				// 	let topTimer = setTimeout(() => {
				// 		setFlagFirst(true)
				// 	}, 0)
				// }
			}
		},
		{ wait: 300 }
	)
	// useEventListener('scroll', handleScroll)

	return (
		<div className={styles.pageCssScroll}>
			<div className={cln(styles.gobg, flag && styles.gobgno)}></div>
			<section
				className={cln(styles.first, flagFirst && styles.current)}
				ref={firstRef}
			>
				<div className={styles.bg}>
					<img
						className={cln(styles.cloud, styles.cloudgo)}
						src={require('@/assets/4_new.png')}
						alt=""
					/>
					<img
						className={cln(styles.wall, styles.wallgo)}
						src={require('@/assets/3_new.png')}
						alt=""
					/>
					<img
						className={cln(styles.car, styles.cargo)}
						src={require('@/assets/2_new.png')}
						alt=""
					/>
					<img
						className={cln(styles.tree, styles.treego)}
						src={require('@/assets/1_new.png')}
						alt=""
					/>
				</div>
				<div className={styles.text}></div>
			</section>
			<section className={styles.second}>
				<div className={styles.inner}>
					<p className={styles.left}>
						It's important to get the entire team on board and
						headed in the right direction on the same cloud journey.
						We align customers in their cloud native story.
					</p>
					<h2 className={styles.right}>
						56K.Cloud was founded to share our vision of the cloud
						with our partners and customers.
					</h2>
				</div>
			</section>
			<section className={styles.third}>
				<div className={styles.left}></div>
				<div className={styles.right}></div>
			</section>
		</div>
	)
}
