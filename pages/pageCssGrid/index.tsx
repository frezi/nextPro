import styles from './index.module.scss'
import { useState, useEffect } from 'react'

//解决最后一行项目布局往左靠齐问题
export default () => {
	return (
		<div className={styles.container}>
			<div className={styles.item1}>
				<p>1</p>
			</div>
			<div className={styles.item2}>
				<p>2</p>
			</div>
			<div className={styles.item3}>
				<p>3</p>
			</div>
			<div className={styles.item4}>
				<p>4</p>
			</div>
			<div className={styles.item5}>
				<p>5</p>
			</div>
		</div>
	)
}
