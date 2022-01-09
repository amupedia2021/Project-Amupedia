import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@styles/Navbar.module.css";

export default () => {
	const router = useRouter();
	const onClick = () => {
		const menu = document.querySelector("#menu");
		if (menu.checked) menu.click();
	};

	return (
		<>
			{/* <!-- hamburger menu icon (for mobile phones) --> */}
			<input type="checkbox" className={styles.menu} id="menu" />
			<label htmlFor="menu" className={styles.ham}>
				<div className={`${styles.hamline} ${styles.hamline1}`}></div>
				<div className={`${styles.hamline} ${styles.hamline2}`}></div>
				<div className={`${styles.hamline} ${styles.hamline3}`}></div>
			</label>

			{/* <!-- overlay to be shown when nav bar becomes visible --> */}
			<div className={styles.blackoverlay} id="overlay" onClick={onClick}></div>

			{/* <!-- navigation bar --> */}
			<nav className={styles.navbar}>
				<ul className={styles.list}>
					<li className={styles.listitem}>
						<Link href="/">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/" ? styles.active : ""
								}`}
							>
								Home
							</a>
						</Link>
					</li>
					<li className={styles.listitem}>
						<Link href="/about">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/about" ? styles.active : ""
								}`}
							>
								About Us
							</a>
						</Link>
					</li>
					<li className={styles.listitem}>
						<Link href="/#courses">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/#courses" ? styles.active : ""
								}`}
							>
								Courses
							</a>
						</Link>
					</li>
					<li className={`${styles.tem} ${styles.listitem}`}>
						<Link href="/team">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/team" ? styles.active : ""
								}`}
							>
								Team
							</a>
						</Link>
					</li>
					<li className={`${styles.blg} ${styles.listitem}`}>
						<Link href="/blog">
							<a
								onClick={onClick}
								className={`${styles.lnk} ${
									router.pathname === "/blog" ? styles.active : ""
								}`}
							>
								Blogs
							</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
