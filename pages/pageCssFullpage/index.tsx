import React, { useState, useEffect, useCallback, useRef } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import cln from 'classname'
import styles from './index.module.scss'

const anchors = ['firstPage', 'secondPage', 'thirdPage']

const MySection = (props) => {
	return (
		<div className="section" id={props.content}>
			<h3
				style={{ textAlign: 'center', fontSize: '66px', color: '#fff' }}
			>
				{props.content}
			</h3>
		</div>
	)
}

export default () => {
	const [flagFirst, setFlagFirst] = useState(false)
	const [flagSecond, setFlagSecond] = useState(false)

	const secondRef = useRef()
	//初始化
	useEffect(() => {
		let topTimer = setTimeout(() => {
			setFlagFirst(true)
		}, 1000)
		return () => {
			clearTimeout(topTimer)
		}
	}, [])

	const setCurrent = useCallback(
		(flag) => {
			console.log(secondRef, 22)
			if (flag && secondRef) {
				setTimeout(() => {
					setFlagSecond(true)
				}, 300)
			} else {
				setTimeout(() => {
					if (secondRef) {
						setFlagSecond(false)
					}
				}, 300)
			}
		},
		[flagSecond]
	)
	return (
		<div ref={secondRef}>
			<ReactFullpage
				licenseKey="YOUR1_KEY_HERE"
				anchors={anchors} // 每一部分的锚点, 就是url#后面的部分
				navigation // 是否显示右侧小圆圈
				navigationTooltips={anchors} // 鼠标放到小圆圈上显示的提示
				sectionsColor={['#282c34', '#ff5f45', '#0798ec']} // 每一个部分你的背景色
				// 到达某一部分你的回调, 参数分别表示从哪里开 去哪里 方向. 前两者是自定义类型nn, 方向是up或down
				afterLoad={(origin, destination, direction) => {
					// page过渡动画====
					// 1、清除所有page的current
					// 2、destination目标page加current
					let anchor = destination.anchor
					// console.log(anchor, 'afterLoad')
					if (anchor == 'secondPage') {
						// setFlagSecond(true)
					}
				}}
				onLeave={(origin, destination, direction) => {
					let anchor = origin.anchor
					// console.log(anchor, 'onLeave')
					if (anchor == 'secondPage') {
						// setFlagSecond(false)
					}
				}}
				render={({ state, fullpageApi }) => {
					console.log(
						'render prop change',
						state.destination,
						fullpageApi
					)
					return (
						<div>
							<MySection
								content={'Slide down!'}
								className={cln(
									styles.first,
									flagFirst && styles.current
								)}
								id="first"
							/>
							{/* <MySection content={'Keep going!'} /> */}
							<div
								className={cln(
									'section',
									styles.second,
									flagSecond && styles.current //====改变造成dom undefined
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
							<MySection content={'Slide up!'} />
						</div>
					)
				}}
			/>
		</div>
	)
}
