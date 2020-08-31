// React
import React, { Component } from "react"

// Components
import NavBar from "./NavBar"

// Css
import "./css/Header.css"
import Logo from "../images/logo.png"
// Main
class Header extends Component {
	render() {
		return (
			<header className="Header">
				<div className="Logo">
					<img src={Logo} alt="Logo" />
					<NavBar />
				</div>
				<div className="Title">
					<h2>la casa que buscabas</h2>
				</div>
			</header>
		)
	}
}

export default Header
