import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App, OldApp } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<App message="Функциональный компонент" />
		<OldApp message="Классовый компонент" />
	</>,
);
