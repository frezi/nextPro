import styles from './index.module.scss'
import { useState, useEffect, useRef } from 'react'
import { useDebounceFn } from 'ahooks'

//stage1 UI css（current选择器）
//stage2 js onscroll监测 定时器
//stage3 微调效果

export default () => {
	const firstRef = useRef()

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	const { run: handleScroll } = useDebounceFn(
		() => {
			//文档内容实际高度（包括超出视窗的溢出部分）
			var scrollHeight = Math.max(
				document.documentElement.scrollHeight,
				document.body.scrollHeight
			)
			//滚动条滚动距离
			var scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop
			//窗口可视范围高度
			var clientHeight =
				window.innerHeight ||
				Math.min(
					document.documentElement.clientHeight,
					document.body.clientHeight
				)

			// first 高度
			const firstHeight = Math.min(firstRef.current.offsetHeight)

			console.log(scrollTop, clientHeight, firstHeight, scrollHeight)

			// 停留在第一部分 所有移除current 自己加current
			if (scrollTop < firstHeight) {
				//已经有current属性不执行
				alert('展示第1部分啦')
			}
			// 停留在第二部分
		},
		{ wait: 100 }
	)

	return (
		<div className={styles.pageCssScroll}>
			<section className={styles.first} ref={firstRef}>
				<div className={styles.bg}>
					<img src={require('@/assets/4_new.png')} alt="" />
					<img src={require('@/assets/3_new.png')} alt="" />
					<img src={require('@/assets/2_new.png')} alt="" />
					<img src={require('@/assets/1_new.png')} alt="" />
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
