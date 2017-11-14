import * as React from "react"
import * as ReactDOM from "react-dom"

import Main from "./components/Main"
import Header from "./components/Header"
require("./stylesheets/main.scss")

const Root: React.StatelessComponent<null> = () => {
	return (
		<div>
			<Header />
			<Main />
		</div>
	)
}

ReactDOM.render(<Root/>, document.getElementById("root"))