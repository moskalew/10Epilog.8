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

	constructor(props) {
		super(props);

		// console.log(props.message); аналог useLayoutEffect()

		this.state = {
			screenWidth: window.innerWidth,
		}; // Но обычно объявляют в конструкторе

		// this.updateScreenWidth = this.updateScreenWidth.bind(this);
	}

	updateScreenWidth = () => {
		this.setState({ screenWidth: window.innerWidth });
	};

	componentDidMount() {
		console.log(this.props.message);

		window.removeEventListener("resize", this.updateScreenWidth);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateScreenWidth);
	}

	render() {
		return (
			<div className={styles.App}>
				{this.props.message}: {this.state.screenWidth}
			</div>
		);
	}
}
