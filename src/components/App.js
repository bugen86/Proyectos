// React
import React, { Component } from "react"

// Css
import "./css/App.css"

// Components
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import NavBarLink from "./NavBar/NavBarLink/NavBarLink"

// Main
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<NavBarLink donde="https://google.com" texto="Apretame" />
				<Main />
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
