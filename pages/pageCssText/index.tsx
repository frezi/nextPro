import styles from './index.module.scss'

export default () => {
	return (
		<div className={styles.pageCssText}>
			<div className={styles.text3dBox}>
				<span data-text="贝">贝</span>
				<span data-text="壳">壳</span>
				<span data-text="找">找</span>
				<span data-text="房">房</span>
			</div>
			<div className={styles.aotuBox}>
				<p className={styles.ao}>麻雀也有明天</p>
				<p className={styles.tu}>麻雀也有明天</p>
			</div>
		</div>
	)
}
