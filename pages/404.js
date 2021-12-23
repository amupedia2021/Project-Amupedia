import styles from "@styles/scss/main.module.scss";

export default () => {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div className={styles.background}></div>
				<h1 className={styles.title}>404</h1>
			</div>
		</main>
	);
};
