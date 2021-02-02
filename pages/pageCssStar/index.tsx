import styles from './index.module.scss'

export default () => {
	return (
		<div className={styles.pageCssStar}>
			<div className={styles.sun}></div>
			<div className={styles.earth}>
				<div className={styles.moon}></div>
			</div>
			<div className={styles.mars}></div>
			<div className={styles.venus}></div>
		</div>
	)
}
