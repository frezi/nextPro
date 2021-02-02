import styles from './index.module.scss'

export default () => {
	return (
		<div className={styles.pageCSSText}>
			<div className={styles.textBox}>
				<span data-text="贝">贝</span>
				<span data-text="壳">壳</span>
				<span data-text="找">找</span>
				<span data-text="房">房</span>
			</div>
		</div>
	)
}
