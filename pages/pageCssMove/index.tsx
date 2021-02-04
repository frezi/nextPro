import styles from './index.module.scss'

export default () => {
	const arr = new Array(13).fill('pk')
	return (
		<div className={styles.pageCssMove}>
			<div className={styles.starBox}>
				<div className={styles.sun}></div>
				<div className={styles.earth}>
					<div className={styles.moon}></div>
				</div>
				<div className={styles.mars}></div>
				<div className={styles.venus}></div>
			</div>
			<div className={styles.secondBox}>
				<div className={styles.second}></div>
			</div>
			<div className={styles.pkBox}>
				{arr.map((v, i) => (
					<img src={require('@/assets/pk1.png')} alt="" key={v + i} />
				))}
			</div>
		</div>
	)
}
