// React
import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

// Css
import "./css/App.css"

// Components
import Header from "./Header"
import Main from "./Main"
import Propiedades from "./Propiedades"
import Footer from "./Footer"
// import NavBarLink from "./NavBar/NavBarLink/NavBarLink"

// Main
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				{/* <NavBarLink donde="https://google.com" texto="Apretame" /> */}
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/propiedades" component={Propiedades} />
				</Switch>
				<Footer />
			</React.Fragment>
		)
	}
}

export default App
