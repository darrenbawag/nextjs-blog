import styles from "../components/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

export default function Custom404() {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h1 className={utilStyles.heading2Xl}>404 - Page Not Found</h1>
			</div>
		</div>
	);
}
