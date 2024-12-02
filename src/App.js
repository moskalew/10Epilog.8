import { Component, useState, useEffect } from "react";
import styles from "./app.module.css";

export const App = ({ message }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		console.log(message);

		const updateScreenWidth = () => setScreenWidth(window.innerWidth);

		window.addEventListener("resize", updateScreenWidth);

		return () => window.removeEventListener("resize", updateScreenWidth);
	}, []);

	return (
		<div className={styles.App}>
			{message}: {screenWidth}
		</div>
	);
};

export class OldApp extends Component {
	// state = window.innerWidth; Как вариант, можно объявить состояние здесь

	constructor() {
		super();
		this.state = {
			screenWidth: window.innerWidth,
		}; // Но обычно объявляют в конструкторе
	}

	render() {
		return (
			<div className={styles.App}>
				{/*{message}*/}: {this.state.screenWidth}
			</div>
		);
	}
}
