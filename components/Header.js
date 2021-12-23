import styles from "@styles/Header.module.css";
import Wave from "./Wave";

export default (props) => {
	const { image, text } = props;
	return (
		<>
			<div
				style={{
					height: "500px",
				}}
			>
				{/* <!-- background on top --> */}
				<div
					className={styles.headerbg}
					style={{
						background: `url(${image}) no-repeat center center/cover`,
					}}
				></div>

				<div className={styles.center_text}>
					<p>{text}</p>
					{text === "Amupedia" && (
						<p className={styles.subline}>Achieving excellence together</p>
					)}
				</div>
				<Wave />
			</div>
		</>
	);
};
