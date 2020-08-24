// React
import React, { Component } from "react"

// Css
import "./css/Header.css"
import Logo from "../images/logo.png"
// Main
class Header extends Component {
	render() {
		return (
			<header className="Header">
				<div>
					<img src={Logo} alt="Logo" />
				</div>
			</header>
		)
	}
}

export default Header
