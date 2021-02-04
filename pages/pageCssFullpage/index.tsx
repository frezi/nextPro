import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import styles from './index.module.scss'

const anchors = ['firstPage', 'secondPage', 'thirdPage']

const MySection = (props) => {
	return (
		<div className="section">
			<h3
				style={{ textAlign: 'center', fontSize: '66px', color: '#fff' }}
			>
				{props.content}
			</h3>
		</div>
	)
}

export default () => {
	return (
		<ReactFullpage
			anchors={anchors} // 每一部分的锚点, 就是url#后面的部分
			navigation // 是否显示右侧小圆圈
			navigationTooltips={anchors} // 鼠标放到小圆圈上显示的提示
			sectionsColor={['#282c34', '#ff5f45', '#0798ec']} // 每一个部分你的背景色
			// 离开某一部分你的回调, 参数分别表示从哪里开 去哪里 方向. 前两者是自定义类型nn, 方向是up或down
			onLeave={(origin, destination, direction) => {
				console.log('onLeave event', { origin, destination, direction })
				// page过渡动画====
				// 1、清除所有page的current
				// 2、destination目标page加current
			}}
			render={({ state, fullpageApi }) => {
				console.log('render prop change', state, fullpageApi)
				return (
					<div>
						<MySection content={'Slide down!'} />
						<MySection content={'Keep going!'} />
						<MySection content={'Slide up!'} />
					</div>
				)
			}}
		/>
	)
}
