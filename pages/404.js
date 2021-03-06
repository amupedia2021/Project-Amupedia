import styles from '@styles/scss/_404.module.scss';

export default function Error() {
	return (
		<main className={styles.main}>
			<div id={styles.stars}></div>
			<div id={styles.stars2}></div>
			<div id={styles.stars3}></div>
			<div className={styles.container}>
				<div className={styles.ufo}></div>
				<div className={styles.background}></div>
				<h1 className={styles.title}>404</h1>
			</div>
		</main>
	);
}
