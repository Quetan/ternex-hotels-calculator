import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import DataProvider from "./DataProvider.tsx";

ReactDOM.createRoot(document.getElementById("calculator_root")!).render(
	<React.StrictMode>
		<DataProvider>
			<App />
		</DataProvider>
	</React.StrictMode>
);
