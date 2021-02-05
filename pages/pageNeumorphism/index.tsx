import styles from './index.module.scss'

export default () => {
	return (
		<div className={styles.boxNeumorphism}>
			<div className={styles.dropShadow}></div>
			<div className={styles.innerShadow}></div>
			<div className={styles.innerShadowRing}></div>
		</div>
	)
}
