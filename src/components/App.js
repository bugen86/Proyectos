// React
import React, { Component } from "react"

// Css
import "./css/App.css"

// Components
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

// Main
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Main />
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
