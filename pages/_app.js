import Navbar from "@comp/Navbar";
import "@styles/globals.css";
import Footer from "components/Footer";
import Head from "node_modules/next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Amupedia</title>
				<meta
					name="description"
					content="Amupedia is an initiative to help college students pursuing B.Tech, B.E or B.Com, especially from AMU."
				/>
			</Head>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
